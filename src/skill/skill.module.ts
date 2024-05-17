import { Module } from '@nestjs/common'
import { SkillController } from './skill.controller'
import { SkillService } from './skill.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Skill } from './model/skill.model'
import { User } from 'src/user/model/user.model'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [SequelizeModule.forFeature([Skill, User]), UserModule],
    controllers: [SkillController],
    providers: [SkillService],
})
export class SkillModule {}
