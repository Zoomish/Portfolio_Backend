import { Injectable } from '@nestjs/common'

@Injectable()
export class GreetingService {
    constructor() {}
    async greeting(bot, chatId, msg) {
        await bot.sendMessage(
            chatId,
            `Здравствуйте, ${msg?.chat?.first_name}! Это мой бот(@Zoomish). Он был написан для удобства HR-ов и для краткого обзора информации обо мне и моих проектах\n\n/about - для просмотра информации обо мне\n/projects - для просмотра моих проектов\n/help - для просмотра команд`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация обо мне',
                                callback_data: 'about',
                            },
                            {
                                text: 'Мои проекты',
                                callback_data: 'projects',
                            },
                        ],
                    ],
                },
            }
        )
    }
}
