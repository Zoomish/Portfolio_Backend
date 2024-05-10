import { Module } from '@nestjs/common'
import { BotService } from './bot.service'
import {
    GreetingService,
    CallbackService,
    MeService,
    ProjectService,
    HelpService,
} from './services'
import { ProjectsModule } from 'src/projects/projects.module'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [ProjectsModule, UserModule],
    providers: [
        BotService,
        GreetingService,
        CallbackService,
        ProjectService,
        MeService,
        HelpService,
    ],
    exports: [],
})
export class BotModule {}
