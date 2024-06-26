// ======


module.exports = RED => {
  function message_adapter(config) {
    RED.nodes.createNode(this, config);
    this.on('input', function (msg, send, done) {
      const message = {
        message_type: msg.message_type,
        chat_id: null,
        from_user: null,
        content_type: null,
        content: null,
        ps: null
      }


      if (msg.message_type == "wechat") {
        message.from_user = msg.message.FromUserName
        message.content_type = msg.message.MsgType
        message.content = msg.message.Content
      }


      if (msg.message_type == "telegram") {
        message.chat_id = msg.message.chat.id
        message.from_user = msg.message.from.id

        if ("text" in msg.message) {
          message.content_type = "text"
          message.content = msg.message.text
        }

        if ("photo" in msg.message) {
          message.content_type = "image"
          message.content = msg.message.photo
        }
      }

      if (msg.message_type == "customize") {
        message = msg.message
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

