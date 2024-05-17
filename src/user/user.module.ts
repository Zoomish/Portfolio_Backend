import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { FilesModule } from 'src/files/files.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './model/user.model'
import { Skill } from 'src/skill/model/skill.model'

@Module({
    imports: [FilesModule, SequelizeModule.forFeature([User, Skill])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
