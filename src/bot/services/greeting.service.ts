import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'

@Injectable()
export class GreetingService {
    constructor(private readonly projectService: ProjectsService) {}
    async greeting(bot, chatId, msg) {
        await bot.sendMessage(
            chatId,
            `Здравствуйте @${msg?.chat?.username}! Это мой бот(@Zoomish). Напишите мне любое сообщение и я отвечу вам в ближайшее время.`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Edit Text',
                                // we shall check for this value when we listen
                                // for "callback_query"
                                callback_data: 'edit',
                            },
                        ],
                    ],
                },
            }
        )
        await bot.on('callback_query', async (callbackQuery) => {
            const data = await this.projectService.findAll()
            console.log(data)

            const action = callbackQuery.data
            const msg = callbackQuery.message
            const opts = {
                chat_id: msg.chat.id,
                message_id: msg.message_id,
            }
            let text

            if (action === 'edit') {
                text = JSON.stringify(data)
            }

            bot.editMessageText(text, opts)
        })
    }
}
