import { Module } from '@nestjs/common'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { Project } from './model/project.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { FilesModule } from 'src/files/files.module'
import { User } from 'src/user/model/user.model'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [
        SequelizeModule.forFeature([Project, User]),
        FilesModule,
        UserModule,
    ],
    controllers: [ProjectsController],
    providers: [ProjectsService],
    exports: [ProjectsService],
})
export class ProjectsModule {}
