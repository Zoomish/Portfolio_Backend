import { Injectable } from '@nestjs/common'
import * as TelegramBot from 'telegram-bot-api'

@Injectable()
export class BotService {
    private bot: TelegramBot
    constructor()
}
