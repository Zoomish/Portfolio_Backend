import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'

@Injectable()
export class CallbackService {
    constructor(private readonly projectService: ProjectsService) {}
    async callback(bot, callbackQuery) {
        const action = callbackQuery.data
        const msg = callbackQuery.message
        if (action === 'edit') {
            const data = await this.projectService.findAll()
            await data.map(async (project) => {
                await bot.sendPhoto(msg.chat.id, `${project.image}`, {
                    parse_mode: 'html',
                    caption: `<b>Название:</b> ${project.title}\n<b>Описание:</b> ${project.description}`,
                })
            })
        }
    }
}
