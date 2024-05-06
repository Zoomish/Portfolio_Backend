import { Module } from '@nestjs/common'
import { BotService } from './bot.service'
import { GreetingService, CallbackService } from './services'
import { ProjectsModule } from 'src/projects/projects.module'

@Module({
    imports: [ProjectsModule],
    providers: [BotService, GreetingService, CallbackService],
    exports: [],
})
export class BotModule {}
