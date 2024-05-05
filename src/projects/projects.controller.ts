import { Controller, Delete, Get, Param, Patch } from '@nestjs/common'
import { ProjectsService } from './projects.service'

@Controller('projectss')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Get()
    findAll() {
        return this.projectsService.findAll()
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
