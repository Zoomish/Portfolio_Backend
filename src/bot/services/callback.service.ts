import { Injectable } from '@nestjs/common'
import { ProjectService } from './project.service'
import { MeService } from './me.service'

@Injectable()
export class CallbackService {
    constructor(
        private readonly projectService: ProjectService,
        private readonly meService: MeService
    ) {}
    async callback(bot, callbackQuery) {
        const action = callbackQuery.data
        const msg = callbackQuery.message
        const msgWait = await bot.sendMessage(msg.chat.id, `Получаю данные...`)
        switch (action) {
            case 'projects':
                return await this.projectService.getProjects(bot, msgWait, msg)
            case 'about':
                return await this.meService.getMe(bot, msgWait, msg)
            default:
                break
        }
    }
}
