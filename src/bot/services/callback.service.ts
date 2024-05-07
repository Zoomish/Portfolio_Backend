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
            data.map((project) => {
                bot.sendPhoto(msg.chat.id, `${project.image}`, {
                    parse_mode: 'html',
                    caption: `<b>Название:</b> ${project.title}`,
                })
            })
        }
    }
}
