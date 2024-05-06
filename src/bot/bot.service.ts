import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TelegramBot = require('node-telegram-bot-api')

@Injectable()
export class BotService {
    constructor(private readonly configService: ConfigService) {
        const telegramToken = this.configService.get('telegram.token')
        const bot = new TelegramBot(telegramToken, {
            polling: true,
        })
        this.initBot(bot)
    }

    async initBot(bot) {
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id
            bot.sendMessage(chatId, `Здравствуйте @${msg?.chat?.username}!`)
        })
    }
}
