import { Module } from '@nestjs/common'
import { BotService } from './bot.service'
import { GreetingService } from './services/greeting.service'

@Module({
    imports: [],
    providers: [BotService, GreetingService],
    exports: [],
})
export class BotModule {}
