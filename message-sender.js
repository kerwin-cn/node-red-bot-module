const { wechat_sender } = require('./lib/wechat')
const { telegram_sender } = require('./lib/telegram')


module.exports = RED => {
  function message_sender(config) {
    RED.nodes.createNode(this, config)
    const sender_config = RED.nodes.getNode(config.botConfig)
    this.on('input', function (msg, _, done) {
      // 统一入口参数
      send_message = {
        message_type: msg.message_type,
        chat_id: msg.chat_id,
        to_user: msg.to_user,
        content_type: msg.content_type,//必须有
        content: msg.content,//必须有
        ps: msg.ps
      }

      msg.message_type == "wechat" ? wechat_sender(sender_config, send_message) : null
      msg.message_type == "telegram" ? telegram_sender(sender_config, send_message) : null

      if (done) {
        done();
      }
    });
  }
  RED.nodes.registerType("message-sender", message_sender);
}




