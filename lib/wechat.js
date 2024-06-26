const express = require('express')
const { Work, ServerRequest } = require("node-easywechat")

function get_config(config) {
    return {
        agent_id: config.wechat_agentid,
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

// 微信的处理server
function wechat_receiver(node, receiver_config) {

    const app = express()
    app.all("/", async (req, res) => {
        const wechat_work = new Work(get_config(receiver_config));
        let request = await ServerRequest.createFromIncomingMessage(req);
        wechat_work.setRequest(request);

        wechat_work.getServer().with(function (message) {
            const show_polling_state = setTimeout(() => {
                node.status({ text: "port: " + receiver_config.wechat_port, fill: 'green', shape: 'dot' })
            }, 2000);

            switch (message.MsgType) {
                case 'text':
                    node.send({ "message_type": "wechat", message: message.attributes })
                    node.status({ text: message.MsgType + " | " + message.Content })
                    show_polling_state.refresh()
                    break;
                case 'event':
                    break;
                default:
            }
            // 返回空或者 'success'，表示程序不做任何响应
            res.end('')
            return
        })

        try {
            await wechat_work.getServer().serve();
        } catch (error) {
            console.log(error)
        }
    });

    const app_server = app.listen(receiver_config.wechat_port, () => {
        node.status({ text: "port: " + receiver_config.wechat_port, fill: 'green', shape: 'dot' })
        node.log(`listening on port ${receiver_config.wechat_port}`)
    })

    app_server.on('error', ({ message }) => { node.status({ text: message, fill: 'red', shape: 'ring' }) })
    node.on('close', () => app_server.close())
}
async function wechat_sender(sender_config, msg) {
    const wechat_work = new Work(get_config(sender_config));
    if (msg.content_type == "text") {
        await wechat_work.getClient().postJson('/cgi-bin/message/send', {
            msgtype: "text",
            touser: msg.to_user,
            agentid: sender_config.wechat_agentid,
            text: { content: msg.content }
        })
        return
    }
}

module.exports.wechat_receiver = wechat_receiver
module.exports.wechat_sender = wechat_sender