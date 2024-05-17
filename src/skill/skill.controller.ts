import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-skill.dto'
import { UpdateUserDto } from './dto/update-skill.dto'
import { SkillService } from './skill.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('user')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createUserDto: CreateUserDto, @UploadedFile() image) {
        return this.skillService.create(createUserDto, image)
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
