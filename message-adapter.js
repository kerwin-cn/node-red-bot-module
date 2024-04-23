// ======


module.exports = RED => {
  function message_adapter(config) {
    RED.nodes.createNode(this, config);
    this.on('input', function (msg, send, done) {
      const message = {}
      // do something with 'msg'
      //TODO
      console.log(msg)


      message.message_type = msg.message_type
      if (msg.message_type == "wechat") {

        // TODO统一
        message.message_id = msg.message.MsgId
        message.content_type = msg.message.MsgType
        message.content = msg.message.Content

        message.from_user = msg.message.FromUserName
        message.to_user = msg.message.ToUserName
        message.chat_id = null

      }
      if (msg.message_type == "telegram") {

        message.message_id = msg.message.message_id
        if (msg.message.text != undefined) {
          message.content_type = "text"
          message.content = msg.message.text
        }



        message.from_user = msg.message.from.id
        message.to_user = null
        message.chat_id = msg.message.chat.id

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

  RED.nodes.registerType("message-adapter", message_adapter);

}

