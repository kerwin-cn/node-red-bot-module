const { wechat_receiver } = require('./lib/wechat')
const { telegram_receiver } = require('./lib/telegram')


module.exports = RED => {
  // 输入节点
  // RED.nodes.registerType('receiver', class {
  //   constructor(config) {
  //     const node = this
  //     RED.nodes.createNode(node, config)
  //     const receiver_config = RED.nodes.getNode(config.botConfig)

  //     receiver_config.platformType == "wechat" ? wechat_receiver(node, receiver_config) : null
  //     receiver_config.platformType == "telegram" ? telegram_receiver(node, receiver_config) : null
  //   }
  // })
  function receiver(config) {
    RED.nodes.createNode(this, config)
    const receiver_config = RED.nodes.getNode(config.botConfig)
    receiver_config.platformType == "wechat" ? wechat_receiver(this, receiver_config) : null
    receiver_config.platformType == "telegram" ? telegram_receiver(this, receiver_config) : null
  }
  RED.nodes.registerType("receiver", receiver);
}




