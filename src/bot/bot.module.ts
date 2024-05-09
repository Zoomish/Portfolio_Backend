import { Module } from '@nestjs/common'
import { BotService } from './bot.service'
import { GreetingService, CallbackService } from './services'
import { ProjectsModule } from 'src/projects/projects.module'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [ProjectsModule, UserModule],
    providers: [BotService, GreetingService, CallbackService],
    exports: [],
})
export class BotModule {}
