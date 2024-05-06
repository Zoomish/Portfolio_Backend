import { Module } from '@nestjs/common'
import { BotService } from './bot.service'
import { GreetingService } from './services/greeting.service'
import { ProjectsModule } from 'src/projects/projects.module'

@Module({
    imports: [ProjectsModule],
    providers: [BotService, GreetingService],
    exports: [],
})
export class BotModule {}
