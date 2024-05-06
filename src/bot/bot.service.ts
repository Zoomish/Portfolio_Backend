import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TelegramBot = require('node-telegram-bot-api')

@Injectable()
export class BotService implements OnModuleInit {
    constructor(private readonly configService: ConfigService) {}

    async onModuleInit() {
        const telegramToken = this.configService.get('telegram.token')
        const bot = new TelegramBot(telegramToken, {
            polling: true,
        })
        await this.initBot(bot)
    }

    async initBot(bot) {
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id
            bot.sendMessage(
                chatId,
                `Здравствуйте @${msg?.chat?.username}! Это мой бот(@Zoomish). Напишите мне любое сообщение и я отвечу вам в ближайшее время.`
            )
        })
    }
}
