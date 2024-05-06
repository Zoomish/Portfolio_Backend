import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TelegramBot = require('node-telegram-bot-api')
import { GreetingService } from './services'

@Injectable()
export class BotService implements OnModuleInit {
    constructor(
        private readonly configService: ConfigService,
        private readonly greetingService: GreetingService
    ) {}

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
            const text = msg.text
            if (text === '/start') {
                return this.greetingService.greeting(bot, chatId, msg)
            }
            const msgWait = await bot.sendMessage(
                msg.chat.id,
                `Бот генерирует ответ...`
            )

            setTimeout(async () => {
                await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
                await bot.sendMessage(msg.chat.id, msg.text)
            }, 5000)
        })
    }
}
