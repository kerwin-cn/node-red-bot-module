process.env['NTBA_FIX_319'] = 1;


function telegram_receiver(node, receiver_config) {
    const TelegramBot = require('node-telegram-bot-api');
    const show_polling_state = setTimeout(() => {
        if (bot.isPolling()) {
            node.status({ text: "polling", fill: 'green', shape: 'dot' })
        }
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
    bot.on('error', (msg) => {
        node.status({ text: `polling_error | ` + msg.message, fill: 'red', shape: 'ring' })
    });
    node.on('close', () => bot.stopPolling());
}


function telegram_sender(sender_config, message) {
    const TelegramBot = require('node-telegram-bot-api');
    // replace the value below with the Telegram token you receive from @BotFather
    const bot = new TelegramBot(sender_config.telegram_key);

    //按message类型
    if (message.content_type == "text") {
        bot.sendMessage(message.chat_id, message.content);
    }
}

// 电报的处理
module.exports.telegram_receiver = telegram_receiver
module.exports.telegram_sender = telegram_sender