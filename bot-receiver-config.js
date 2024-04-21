module.exports = (RED) => {
    function BotReveiverConfig(n) {
        RED.nodes.createNode(this, n);
        this.name = n.name;
        this.platformType = n.platformType;
        if (n.platformType == "wechat") {
            this.wechat_port = n.wechat_port
            this.wechat_corpid = n.wechat_corpid
            this.wechat_agentid = n.wechat_agentid
            this.wechat_corpsecret = n.wechat_corpsecret
            this.wechat_url = n.wechat_url
            this.wechat_token = n.wechat_token
            this.wechat_aeskey = n.wechat_aeskey
        }

        if (n.platformType == "telegram") {
            this.telegram_key = n.telegram_key
        }

    }
    RED.nodes.registerType("bot-receiver-config", BotReveiverConfig);

}