import { Injectable } from '@nestjs/common'
import { ProjectsService } from 'src/projects/projects.service'

@Injectable()
export class CallbackService {
    constructor(private readonly projectService: ProjectsService) {}
    async callback(bot, callbackQuery) {
        const action = callbackQuery.data
        const msg = callbackQuery.message
        const opts = {
            chat_id: msg.chat.id,
            message_id: msg.message_id,
        }
        let text

        if (action === 'edit') {
            const data = await this.projectService.findAll()
            text = JSON.stringify(data)
            bot.sendPhoto([
                msg.chat.id,
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/300px-Moench_2339.jpg',
                'AAA',
            ])
        }

        bot.editMessageText(text, opts)
    }
}
