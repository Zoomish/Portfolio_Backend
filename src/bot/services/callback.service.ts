import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class CallbackService {
    constructor(
        private readonly projectService: ProjectsService,
        private readonly userService: UserService
    ) {}
    async callback(bot, callbackQuery) {
        const action = callbackQuery.data
        const msg = callbackQuery.message
        const msgWait = await bot.sendMessage(msg.chat.id, `Получаю данные...`)
        switch (action) {
            case 'projects':
                const data = await this.projectService.findAll()
                await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
                return await data.map(async (project) => {
                    await bot.sendPhoto(msg.chat.id, `${project.image}`, {
                        parse_mode: 'html',
                        caption: `<b>Название:</b> ${project.title}\n<b>Описание:</b> ${project.description}\n<b>Теги:</b> ${project.tags}\n<b>Посмотреть:</b> <a href='${project.live}'>${project.live}</a>\n<b>Репозиторий:</b> <a href='${project.repository}'>${project.repository}</a>`,
                    })
                })
            case 'about':
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
            default:
                break
        }
    }
}
