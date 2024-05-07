import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'

@Injectable()
export class CallbackService {
    constructor(private readonly projectService: ProjectsService) {}
    async callback(bot, callbackQuery) {
        const action = callbackQuery.data
        const msg = callbackQuery.message
        const msgWait = await bot.sendMessage(
            msg.chat.id,
            `Бот генерирует ответ...`
        )
        if (action === 'edit') {
            const data = await this.projectService.findAll()
            await data.map(async (project) => {
                await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
                await bot.sendPhoto(msg.chat.id, `${project.image}`, {
                    parse_mode: 'html',
                    caption: `<b>Название:</b> ${project.title}\n<b>Описание:</b> ${project.description}\n<b>Теги:</b> ${project.tags}\n<b>Посмотреть:</b> <a href='${project.live}'>${project.live}</a>\n<b>Репозиторий:</b> <a href='${project.repository}'>${project.repository}</a>`,
                })
            })
        }
    }
}
