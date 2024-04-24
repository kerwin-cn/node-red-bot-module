process.env['NTBA_FIX_319'] = 1;


function telegram_receiver(node, receiver_config) {
    const TelegramBot = require('node-telegram-bot-api');
    const show_polling_state = setTimeout(() => {
        node.status({ text: `polling`, fill: 'green', shape: 'dot' })
    }, 2000);

    // replace the value below with the Telegram token you receive from @BotFather
    const bot = new TelegramBot(receiver_config.telegram_key);

    if (!bot.isPolling()) {
        bot.startPolling()
    }

    bot.on('message', (msg) => {
        node.send({ "message_type": "telegram", "message": msg })
        node.status({ text: `message:` + msg.text, fill: 'green', shape: 'dot' })
        show_polling_state.refresh()
    });
    bot.on('polling_error', (msg) => {
        node.status({ text: `polling_error | ` + msg.message, fill: 'red', shape: 'ring' })
        bot.stopPolling()
    });
    node.on('close', () => bot.stopPolling());
}


function telegram_sender(node, sender_config, message) {
    const TelegramBot = require('node-telegram-bot-api');
    // replace the value below with the Telegram token you receive from @BotFather
    const bot = new TelegramBot(sender_config.telegram_key);

    // // 检测是否是自己创建
    // let sender_created_polling = false
    // if (!bot.isPolling()) {
    //     sender_created_polling = true
    //     bot.startPolling()
    // }

    //按message类型
    if (message.message_type == "text") {
        bot.sendMessage(message.chat_id, message.message);
    }

    // // 是本项目创建的 被关闭时就停止一下
    // node.on('close', () => sender_created_polling ? bot.stopPolling() : null);

}

// 电报的处理
module.exports.telegram_receiver = telegram_receiver
module.exports.telegram_sender = telegram_sender