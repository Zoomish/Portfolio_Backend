import { Injectable } from '@nestjs/common'

@Injectable()
export class HelpService {
    async help(bot, chatId) {
        await bot.sendMessage(
            chatId,
            `/about - для просмотра информации обо мне\n/projects - для просмотра моих проектов`,
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
