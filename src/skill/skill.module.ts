import { Module } from '@nestjs/common'
import { UserController } from './skill.controller'
import { UserService } from './skill.service'
import { FilesModule } from 'src/files/files.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './model/skill.model'

@Module({
    imports: [FilesModule, SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
