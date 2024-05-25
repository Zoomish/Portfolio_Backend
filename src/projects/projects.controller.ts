import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { CreateProjectDto } from './dto/create-project.dto'

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Get()
    findAll() {
        return this.projectsService.findAll()
    }

    @Get('/AAA')
    AAAA() {
        return {}
    }

    @Post()
    create(@Body() dto: CreateProjectDto) {
        return this.projectsService.create(dto)
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
