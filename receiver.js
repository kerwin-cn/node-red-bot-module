const express = require('express')
const WXBizMsgCrypt = require('wechat-crypto')
const WeChat = require('./lib/wechat')
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



function wechat(receiver_config) {
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
      // === 正常通讯消息 ==========
      try {
        const message = await wx.getMessage(req)
        console.log(`receive message: ${JSON.stringify(message)}`)
        if (message.MsgType == 'voice' && receiver_config.client_id && receiver_config.client_id) {
          const amr = await wx.getMedia(message.MediaId)
          const asr = await bd.getAsr(amr)
          message.AsrContent = asr
        }
        node.status({ text: `${message.MsgType}(${message.Content})` })
        node.send({ res, req, config: receiver_config, message })
        // 应答
        res.end('')
        setTimeout(() => {
          node.status({ text: `port: ${receiver_config.wechat_port}`, fill: 'green', shape: 'dot' })
        }, 1000);
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


function telegram(node, receiver_config) {
  const TelegramBot = require('node-telegram-bot-api');

  // replace the value below with the Telegram token you receive from @BotFather
  const token = receiver_config.telegram_key;
  const bot = new TelegramBot(token, { polling: true });
  node.telegram_bot = bot

  bot.on('message', (msg) => {
    node.send({ res, req, config: receiver_config, msg })
  });
  bot.on('polling_error', (msg) => {
    node.status({ text: `polling_error` + msg.message, fill: 'red', shape: 'ring' })
  });
  bot.on('poll', () => {
    node.status({ text: `polling`, fill: 'green', shape: 'ring' })
  });
}

module.exports = RED => {
  // 输入节点
  RED.nodes.registerType('receiver', class {
    constructor(config) {
      const node = this
      RED.nodes.createNode(node, config)
      const receiver_config = RED.nodes.getNode(config.botConfig)

      if (receiver_config.platformType == "wechat") {
        wechat(receiver_config)
      }

      if (receiver_config.platformType == "telegram") {
        //config.icon = "telegram.png"
        telegram(node, receiver_config)
      }
    }
  })
}