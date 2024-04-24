


module.exports = RED => {

  function for_test(config) {

    RED.nodes.createNode(this, config)
    const receiver_config = RED.nodes.getNode(config.botConfig)

  }
  RED.nodes.registerType("for-test", for_test);
}




