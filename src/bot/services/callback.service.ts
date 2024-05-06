import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'

@Injectable()
export class CallbackService {
    constructor(private readonly projectService: ProjectsService) {}
    async callback(bot, callbackQuery) {
        const data = await this.projectService.findAll()
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
    }
}
