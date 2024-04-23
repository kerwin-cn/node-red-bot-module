process.env['NTBA_FIX_319'] = 1;


function telegram_receiver(node, receiver_config) {
    node.icon = "font-awesome/fa-telegram"
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
// 电报的处理
module.exports.telegram_receiver = telegram_receiver