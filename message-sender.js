const { wechat_sender } = require('./lib/wechat')
const { telegram_sender } = require('./lib/telegram')


module.exports = RED => {
  function message_sender(config) {
    RED.nodes.createNode(this, config)
    const sender_config = RED.nodes.getNode(config.botConfig)

    this.on('input', function (msg, _, done) {

      send_message = {
        message_type: msg.content_type = "text",
        chat_id: msg.chat_id,
        message: message.content
      }

      msg.message_type == "wechat" ? wechat_sender(this, sender_config, send_message) : null
      msg.message_type == "telegram" ? telegram_sender(this, sender_config, send_message) : null

      if (done) {
        done();
      }
    });
  }
  RED.nodes.registerType("message-sender", message_sender);
}




