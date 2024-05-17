import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-skill.dto'
import { UpdateUserDto } from './dto/update-skill.dto'
import { SkillService } from './skill.service'

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.skillService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.skillService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.skillService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.skillService.update(+id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.skillService.remove(+id)
    }
}
