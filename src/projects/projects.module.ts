import { Module } from '@nestjs/common'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { Project } from './model/project.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { FilesModule } from 'src/files/files.module'

@Module({
    imports: [SequelizeModule.forFeature([Project]), FilesModule],
    controllers: [ProjectsController],
    providers: [ProjectsService],
    exports: [ProjectsService],
})
export class ProjectsModule {}
