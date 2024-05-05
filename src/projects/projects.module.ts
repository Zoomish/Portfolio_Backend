import { Module } from '@nestjs/common'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'

@Module({
    imports: [],
    controllers: [ProjectsController],
    providers: [ProjectsService],
    exports: [],
})
export class ProjectsModule {}
