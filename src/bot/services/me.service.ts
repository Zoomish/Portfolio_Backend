import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'

@Injectable()
export class MeService {
    constructor(private readonly userService: UserService) {}
    async getMe(bot, msg) {
        const msgWait = await bot.sendMessage(msg.chat.id, `Получаю данные...`)
        const data1 = await this.userService.findAll()
        const user = data1[0]
        const work = user.work.replace(' ', '').split(',')
        await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
        return await bot.sendPhoto(msg.chat.id, `${user.image}`, {
            parse_mode: 'html',
            caption: `<b>Меня зовут:</b> ${user.name}\n<b>Мой email:</b> ${user.email}\n<b>Мой Гитхаб:</b> ${user.github}\n<b>Работаю в:</b> <a href='${work[0]}'>${work[1]}</a>\n<b>Мое портфолио:</b> <a href='${user.portfolio}'>${user.portfolio}</a>`,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Мои проекты',
                            callback_data: 'projects',
                        },
                    ],
                ],
            },
        })
    }
}
