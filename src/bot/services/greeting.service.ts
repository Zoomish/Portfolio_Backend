import { Injectable } from '@nestjs/common'

@Injectable()
export class GreetingService {
    async greeting(bot, chatId, msg) {
        return await bot.sendMessage(
            chatId,
            `Здравствуйте @${msg?.chat?.username}! Это мой бот(@Zoomish). Напишите мне любое сообщение и я отвечу вам в ближайшее время.`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Мои проекты',
                                url: 'https://tg-bot-frontend-three.vercel.app',
                            },
                        ],
                    ],
                },
            }
        )
    }
}
