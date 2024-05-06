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
import { ProjectsService } from './projects.service'
import { CreateProjectDto } from './dto/create-project.dto'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Get()
    findAll() {
        return this.projectsService.findAll()
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto: CreateProjectDto, @UploadedFile() image) {
        return this.projectsService.create(dto, image)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectsService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string) {
        return this.projectsService.update(+id)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.projectsService.remove(+id)
    }
}
