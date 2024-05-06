import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as TelegramBot from 'node-telegram-bot-api'

@Injectable()
export class BotService {
    private bot: TelegramBot

    constructor(private readonly configService: ConfigService) {
        const telegramToken = configService.get('telegram.token')
        this.bot = new TelegramBot(telegramToken, { polling: true })
        this.initBot()
    }

    async initBot() {
        this.bot.on('message', async (msg) => {
            const chatId = msg.chat.id
            this.bot.sendMessage(
                chatId,
                `Здравствуйте @${msg?.chat?.username}!`
            )
        })
    }
}
