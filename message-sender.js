const { wechat_sender } = require('./lib/wechat')
const { telegram_sender } = require('./lib/telegram')


module.exports = RED => {
  function message_sender(config) {
    RED.nodes.createNode(this, config)
    const sender_config = RED.nodes.getNode(config.botConfig)

    this.on('input', function (msg, _, done) {

      msg.message_type == "wechat" ? wechat_sender(this, sender_config, msg) : null
      msg.message_type == "telegram" ? telegram_sender(this, sender_config, msg) : null

      if (done) {
        done();
      }
    });
  }
  RED.nodes.registerType("message-sender", message_sender);
}




