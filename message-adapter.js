// ======
module.exports = RED => {
  // 输入节点
  RED.nodes.registerType('message_adapter', class {
    constructor(config) {
      this.on('input', function (msg, send, done) {
        const message = {}
        // do something with 'msg'
        message.message_type = msg.message_type
        if (msg.message_type == "wechat") {

          // TODO统一
          message.message_id = msg.message.MsgId
          message.content_type = msg.message.MsgType
          message.content = msg.message.Content

          message.from_user = msg.message.FromUserName
          message.to_user = msg.message.ToUserName
          message.room_id = null

        }
        if (msg.message_type == "telegram") {

          message.message_id = msg.message.MsgId
          message.content_type = msg.message.MsgType
          message.content = msg.message.Content

          message.from_user = msg.message.FromUserName
          message.to_user = msg.message.ToUserName
          message.room_id = null

        }

        send(message)
        // Once finished, call 'done'.
        // This call is wrapped in a check that 'done' exists
        // so the node will work in earlier versions of Node-RED (<1.0)
        if (done) {
          done();
        }
      });
    }
  })
}