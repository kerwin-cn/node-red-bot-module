const express = require('express')
const crypto = require('crypto')
const fs = require('fs')
const UrlResolve = require('url').resolve
const Xml2js = require('xml2js')
const WXBizMsgCrypt = require('wechat-crypto')
const axios = require('axios')
const mkdirp = require('mkdirp')
const FormData = require('form-data')
const marked = require('marked')
const os = require('os')
const WeChatCode = require('./wechatcode')
const indexHtml = `<!DOCTYPE html>
<html>
<head>
    <title>微信接收 运行中。。</title>
    <style>
        body {padding: 50px;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;}
        a {color: #00B7FF;}
    </style>
</head>
<body>
ok
</body>
</html>`

const EXPIRE_TIME = 1000 * 3600 * 2

class WeChat {
    constructor(node, config, cryptor) {
        this.node = node
        this.config = config
        this.cryptor = cryptor
    }
    receiveData(req) {
        return new Promise(resolve => {
            const buffer = []
            req.on('data', trunk => buffer.push(trunk))
            req.on('end', trunk => resolve(Buffer.concat(buffer).toString('utf-8')))
        })
    }
    parseXML(xml) {
        return new Promise(resolve => {
            Xml2js.parseString(xml, {
                trim: true,
                explicitArray: false,
                ignoreAttrs: true
            }, (err, result) => resolve(result.xml, err))
        })
    }
    getReplyXML(from, to, msg) {
        return `
    <xml>
      <ToUserName><![CDATA[${from}]]></ToUserName>
      <FromUserName><![CDATA[${to}]]></FromUserName>
      <CreateTime>${new Date().getTime()}</CreateTime>
      <MsgType><![CDATA[text]]></MsgType>
      <Content><![CDATA[${msg}]]></Content>
    </xml>
    `
    }
    getSendXML(fromUsername, toUsername, msg) {
        const { wechat_token, wechat_aeskey, wechat_corpid } = this.config
        const xml = this.getReplyXML(fromUsername, toUsername, msg)
        const cryptor = new WXBizMsgCrypt(wechat_token, wechat_aeskey, wechat_corpid)
        const encrypt = cryptor.encrypt(xml)
        const nonce = parseInt((Math.random() * 100000000000), 10)
        const timestamp = new Date().getTime()
        const signature = cryptor.getSignature(timestamp, nonce, encrypt)
        return `
    <xml>
      <Encrypt><![CDATA[${encrypt}]]></Encrypt>
      <MsgSignature><![CDATA[${signature}]]></MsgSignature>
      <TimeStamp>${timestamp}</TimeStamp>
      <Nonce><![CDATA[${nonce}]]></Nonce>
    </xml>
    `
    }
    getToken() {
        const { set: setCache, get: getCache } = this.node.context().global
        const { wechat_corpid, wechat_corpsecret, wechat_agentid } = this.config
        return new Promise(async (resolve, reject) => {
            try {
                const cache_key = `wechat-${wechat_agentid}`
                // 修改缓存token逻辑,用于可以使用多个应用进行推送
                const cache = getCache(cache_key)
                if (cache && cache.time && ((new Date().valueOf() - cache.time) < EXPIRE_TIME)) {
                    // console.log('has cache', cache)
                    resolve(cache.token)
                    return
                }
                const { data } = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/gettoken', {
                    params: { wechat_corpid, wechat_corpsecret }
                }).catch(err => {
                    throw new Error(`[微信Token]:${err}`)
                })
                if (data.errcode != 0) {
                    const msg = WeChatCode[data.errcode] || data.errmsg
                    throw (new Error(`[微信Token]${msg}`))
                }
                setCache(cache_key, {
                    token: data.access_token,
                    time: new Date().valueOf()
                })
                resolve(data.access_token)
            } catch (err) { reject(err) }
        })
    }
    getMedia(media_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const access_token = await this.getToken()
                const result = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/media/get', {
                    params: { access_token, media_id },
                    responseType: 'arraybuffer'
                }).catch(err => {
                    throw new Error(`[微信媒体]${err}`)
                })
                if (result.data.errcode != null && result.data.errcode != 0) {
                    const msg = WeChatCode[result.data.errcode] || result.data.errmsg
                    throw (new Error(`[微信媒体]${msg}`))
                }
                if (result.headers['error-code'] && result.headers['error-code'] != 0) {
                    const msg = WeChatCode[result.headers['error-code']] || result.headers['error-msg']
                    throw (new Error(`[微信媒体]${msg}`))
                }
                resolve(result.data)
            } catch (err) { reject(err) }
        })
    }

    uploadMedia(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const access_token = await this.getToken()

                const { file, type, filename } = data

                const form = new FormData()
                form.append('media', file, filename)

                const header = Object.assign({
                    'Content-Length': form.getLengthSync()
                }, form.getHeaders())
                // console.log(header)
                const result = await axios.post(`https://qyapi.weixin.qq.com/cgi-bin/media/upload`, form, {
                    params: { access_token, type },
                    headers: header

                }).catch(err => {
                    throw new Error(`[微信媒体上传]${err}`)
                })

                if (result.data.errcode && result.data.errcode != 0) {
                    const msg = WeChatCode[result.data.errcode] || result.data.errmsg
                    throw (new Error(`[微信媒体上传]${msg}`))
                }
                if (result.headers['error-code'] && result.headers['error-code'] != 0) {
                    const msg = WeChatCode[result.headers['error-code']] || result.headers['error-msg']
                    throw (new Error(`[微信媒体上传]${msg}`))
                }
                resolve(result.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    async getMessage(req) {
        // 接收消息
        const message = await this.receiveData(req)
        // 解析xml数据
        const result = await this.parseXML(message)
        // 解密消息
        const decrypt_message = this.cryptor.decrypt(result.Encrypt)
        // 解析消息xml数据
        const json_message = await this.parseXML(decrypt_message.message)
        return json_message
    }
    // 发送主动消息
    pushMessage(sendData) {
        return new Promise(async (resolve, reject) => {
            try {
                const access_token = await this.getToken()
                // 当用户手动发送消息做一下检查
                if (!sendData.agentid) {
                    sendData.agentid = this.config.agentid
                }

                const result = await axios.post(`https://qyapi.weixin.qq.com/cgi-bin/message/send`, sendData, {
                    params: { access_token }
                }).catch(err => {
                    throw new Error(`[微信推送]${err}`)
                })
                if (result.data.errcode != null && result.data.errcode != 0) {
                    const msg = WeChatCode[result.data.errcode] || result.data.errmsg
                    throw (new Error(`[微信推送]${msg}`))
                }
                resolve(sendData)
            } catch (err) { reject(err) }
        })
    }

    pushbearTemplate(data) {
        const { url } = this.config

        // 处理pushbear数据
        data.html = marked(data.description)
        const { title, html } = data

        const date = new Date()
        const datePath = `${date.getFullYear()}-${date.getMonth() + 1}`
        const parentDir = `${os.homedir()}/.node-red/pushbear/${datePath}`
        // 创建存储目录
        mkdirp.sync(parentDir)
        // 计算文件名并存储
        const content = JSON.stringify({ title, description: html, time: new Date().valueOf() })
        const fileName = crypto.createHash('md5').update(JSON.stringify(content)).digest('hex')
        fs.writeFileSync(`${parentDir}/${fileName}.txt`, content)
        // 生成网络URL
        if (data.longPath) {
            data.url = `${url}/pushbear/${datePath}/${fileName}`
        } else {
            data.url = `${UrlResolve(url, `/pushbear/${datePath}`)}/${fileName}`
        }

        return data
    }

    pushbearMessage(data) {
        return new Promise(async (resolve, reject) => {
            try {
                // 原始markdown 文本信息
                const markdown = data.description
                // 处理存储推送消息
                this.pushbearTemplate(data)

                const { title, introduction, touser, html } = data
                // 发送主动消息
                if (introduction) { // 如果用户已经自己定义简介,测试用用户提供的
                    data.description = introduction
                } else {
                    const noHtml = html.replace(/<\/?[^>]*>/g, '')
                    data.description = noHtml
                }
                // 构建卡片发送消息格式
                const { agentid } = this.config
                const sendData = {
                    msgtype: 'textcard',
                    agentid,
                    touser,
                    textcard: { title, description: data.description, url: data.url }
                }

                await this.pushMessage(sendData)
                data.description = markdown
                resolve(data)
            } catch (err) { reject(err) }
        })
    }
}


// 微信的处理server
function wechat_receiver(node, receiver_config) {
    const cryptor = new WXBizMsgCrypt(receiver_config.wechat_token, receiver_config.wechat_aeskey, receiver_config.wechat_corpid)
    const wx = new WeChat(node, receiver_config, cryptor)
    const app = express()

    // 接收消息主逻辑
    app.all('/', async (req, res) => {
        if (req.method == 'GET') {
            // === 回调校验用 ==========
            const sVerifyEchoStr = decodeURIComponent(req.query.echostr)
            if (req.query.msg_signature == cryptor.getSignature(req.query.timestamp, req.query.nonce, sVerifyEchoStr)) {
                res.send(cryptor.decrypt(sVerifyEchoStr).message)
            } else {
                res.status(200).send(indexHtml)
            }
        } else {
            const show_polling_state = setTimeout(() => {
                node.status({ text: "port: " + receiver_config.wechat_port, fill: 'green', shape: 'dot' })
            }, 2000);
            // === 正常通讯消息 ==========
            try {
                const message = await wx.getMessage(req)
                if (message.MsgType == 'voice' && receiver_config.client_id && receiver_config.client_id) {
                    const amr = await wx.getMedia(message.MediaId)
                    const asr = await bd.getAsr(amr)
                    message.AsrContent = asr
                }
                node.send({ "message_type": "wechat", message: message, ps: { res: res } })
                node.status({ text: message.MsgType + message.Content })
                show_polling_state.refresh()
                // 应答
                res.end('')
            } catch (err) {
                node.status({ text: err.message, fill: 'red', shape: 'ring' })
                node.warn(err)
                res.end('')
            }
        }
    })

    // 404
    app.use((req, res) => {
        res.status(404).end('')
    })

    const server = app.listen(receiver_config.wechat_port, () => {
        node.status({ text: `port: ${receiver_config.wechat_port}`, fill: 'green', shape: 'dot' })
        node.log(`listening on port ${receiver_config.wechat_port}`)
    })
    server.on('error', ({ message }) => { node.status({ text: message, fill: 'red', shape: 'ring' }) })
    node.on('close', () => server.close())
}
function wechat_sender(node, sender_config, message) {
    const cryptor = new WXBizMsgCrypt(sender_config.token, sender_config.aeskey, sender_config.corpid)
    const wx = new WeChat(node, sender_config, cryptor)

    res = message.res

    if (message.message_type == "text") {
        //res.end(wx.getSendXML(message.from_user, message.to_user, message.message))
        res.end(wx.getSendXML(message.to_user, message.from_user, message.message))
        return
    }

    res.end('')
}

module.exports.wechat_receiver = wechat_receiver
module.exports.wechat_sender = wechat_sender