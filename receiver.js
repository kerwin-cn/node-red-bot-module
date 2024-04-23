const express = require('express')
const WXBizMsgCrypt = require('wechat-crypto')
const WeChat = require('./lib/wechat')
process.env['NTBA_FIX_319'] = 1;
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


// 微信的处理
function wechat(node, receiver_config) {
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
        node.send({ playload: { "message_type": "wechat", message: message } })
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


// 电报的处理
function telegram(node, receiver_config) {
  node.icon = "font-awesome/fa-telegram"
  const TelegramBot = require('node-telegram-bot-api');
  const show_polling_state = setTimeout(() => {
    node.status({ text: `polling`, fill: 'green', shape: 'dot' })
  }, 2000);

  // replace the value below with the Telegram token you receive from @BotFather
  const bot = new TelegramBot(receiver_config.telegram_key);

  if (!bot.isPolling()) {
    bot.startPolling()
  }

  bot.on('message', (msg) => {
    node.send({ playload: { "message_type": "telegram", "message": msg } })
    node.status({ text: `message:` + msg.text, fill: 'green', shape: 'dot' })
    show_polling_state.refresh()
  });
  bot.on('polling_error', (msg) => {
    node.status({ text: `polling_error | ` + msg.message, fill: 'red', shape: 'ring' })
    bot.stopPolling()
  });
  node.on('close', () => bot.stopPolling());
}

module.exports = RED => {
  // 输入节点
  RED.nodes.registerType('receiver', class {
    constructor(config) {
      const node = this
      RED.nodes.createNode(node, config)
      const receiver_config = RED.nodes.getNode(config.botConfig)

      receiver_config.platformType == "wechat" ? wechat(node, receiver_config) : null
      receiver_config.platformType == "telegram" ? telegram(node, receiver_config) : null
    }
  })
}