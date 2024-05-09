import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TelegramBot = require('node-telegram-bot-api')
import {
    CallbackService,
    GreetingService,
    ProjectService,
    MeService,
} from './services'

@Injectable()
export class BotService implements OnModuleInit {
    constructor(
        private readonly callbackService: CallbackService,
        private readonly projectService: ProjectService,
        private readonly meService: MeService,
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
            if (text === '/about') {
                const msgWait = await bot.sendMessage(
                    msg.chat.id,
                    `Получаю данные...`
                )
                return this.meService.getMe(bot, msgWait, msg)
            }
            if (text === '/projects') {
                const msgWait = await bot.sendMessage(
                    msg.chat.id,
                    `Получаю данные...`
                )
                return await this.projectService.getProjects(bot, msgWait, msg)
            }
        })
        bot.on('callback_query', async (callbackQuery) => {
            await this.callbackService.callback(bot, callbackQuery)
        })
    }
}
