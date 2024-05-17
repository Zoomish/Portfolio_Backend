import { Module } from '@nestjs/common'
import { SkillController } from './skill.controller'
import { SkillService } from './skill.service'
import { FilesModule } from 'src/files/files.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './model/skill.model'

@Module({
    imports: [FilesModule, SequelizeModule.forFeature([User])],
    controllers: [SkillController],
    providers: [SkillService],
})
export class SkillModule {}
