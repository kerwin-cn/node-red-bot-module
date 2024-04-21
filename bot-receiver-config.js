module.exports = (RED) => {
    function BotReveiverConfig(n) {
        RED.nodes.createNode(this, n);
        this.name = n.name;
        this.platformType = n.platformType;
        if (n.platformType == "wechat") {
            this.platformConfig["wechat_port"] = n.wechat_port
            this.platformConfig["wechat_corpid"] = n.wechat_corpid
            this.platformConfig["wechat_agentid"] = n.wechat_agentid
            this.platformConfig["wechat_corpsecret"] = n.wechat_corpsecret
            this.platformConfig["wechat_url"] = n.wechat_url
            this.platformConfig["wechat_token"] = n.wechat_token
            this.platformConfig["wechat_aeskey"] = n.wechat_aeskey
        }

        if (n.platformType == "telegram") {
            this.platformConfig["telegram_key"] = n.telegram_key
        }

    }
    RED.nodes.registerType("bot-receiver-config", BotReveiverConfig);

}