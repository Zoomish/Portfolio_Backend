import { Module } from '@nestjs/common'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { Project } from './project.model'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
    imports: [SequelizeModule.forFeature([Project])],
    controllers: [ProjectsController],
    providers: [ProjectsService],
    exports: [],
})
export class ProjectsModule {}
