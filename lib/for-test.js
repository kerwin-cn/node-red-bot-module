
const express = require('express')
const { Work, ServerRequest } = require("node-easywechat")

function get_config(config) {
    return {
        agent_id: config.wechat_corpid,
        // 企业微信的 corp id
        corp_id: config.wechat_corpid,
        // 企业微信的 secret
        secret: config.wechat_corpsecret,
        // 企业微信的 token
        token: config.wechat_token,
        // EncodingAESKey
        aes_key: config.wechat_aeskey,
    }
}

function for_test() {

}

module.exports.for_test = for_test
