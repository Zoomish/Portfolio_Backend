import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { CreateBotDto } from './dto/create-bot.dto'
import { UpdateBotDto } from './dto/update-bot.dto'
import { BotService } from './bot.service'

@Controller('bots')
export class BotController {
    constructor(private readonly botService: BotService) {}

    @Post()
    create(@Body() createBotDto: CreateBotDto) {
        return this.botService.create(createBotDto)
    }

    @Get()
    findAll() {
        return this.botService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.botService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBotDto: UpdateBotDto) {
        return this.botService.update(+id, updateBotDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.botService.remove(+id)
    }
}
