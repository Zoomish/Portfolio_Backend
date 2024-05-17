import { Module } from '@nestjs/common'
import { SkillController } from './skill.controller'
import { SkillService } from './skill.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Skill } from './model/skill.model'
import { User } from 'src/user/model/user.model'

@Module({
    imports: [SequelizeModule.forFeature([Skill, User])],
    controllers: [SkillController],
    providers: [SkillService],
})
export class SkillModule {}
