import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'

@Injectable()
export class MeService {
    constructor(private readonly userService: UserService) {}
    async getMe(bot, msg) {
        const msgWait = await bot.sendMessage(msg.chat.id, `Получаю данные...`)
        const user = await this.userService.findAll()
        const expirience = Math.ceil(
            (new Date(new Date().toISOString().split('T')[0]).getTime() -
                new Date(user.expirience).getTime()) /
                (1000 * 60 * 60 * 24 * 30)
        )
        const work = user.work.replaceAll(' ', '').split(',')
        await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
        return await bot.sendPhoto(msg.chat.id, `${user.image}`, {
            parse_mode: 'html',
            caption: `<b>Меня зовут:</b> ${user.name}\n<b>Мой email:</b> ${user.email}\n<b>Мое портфолио:</b> <a href='${user.portfolio}'> Сайт визитка</a>\n<b>Мой Гитхаб:</b> ${user.github}\n<b>Мой опыт работы:</b> ${Math.floor(expirience / 12)} ${await this.age(Math.floor(expirience / 12))} ${expirience % 12} ${await this.month(expirience % 12)}\n<b>Работаю в:</b> <a href='${work[0]}'>${work[1]}</a>\n<b>Мои навыки:</b> \n${user.skills
                .map((skill) => {
                    return `    ${skill.title.replaceAll(' ', '')}\n`
                })
                .join('')}`,
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
    async age(age) {
        let txt
        let count = age % 100
        if (count >= 5 && count <= 20) {
            txt = 'лет'
        } else {
            count = count % 10
            if (count == 1) {
                txt = 'год'
            } else if (count >= 2 && count <= 4) {
                txt = 'года'
            } else {
                txt = 'лет'
            }
        }
        return txt
    }
    async month(month) {
        if (month == 1) {
            return 'месяц'
        }
        if (month > 1 && month < 5) {
            return 'месяца'
        }
        if (month > 4) {
            return 'месяцев'
        }
    }
}
