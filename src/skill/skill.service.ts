import { Injectable } from '@nestjs/common'
import { CreatSkillDto } from './dto/create-skill.dto'
import { UpdateUserDto } from './dto/update-skill.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Skill } from './model/skill.model'

@Injectable()
export class SkillService {
    constructor(@InjectModel(Skill) private skillRepository: typeof Skill) {}
    async create(createSkillDto: CreatSkillDto) {
        const project = await this.skillRepository.create({
            ...createSkillDto,
        })
        return project
    }

    async findAll() {
        return await this.skillRepository.findOne()
    }

    findOne(id: number) {
        return `This action returns a #id user`
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #id user`
    }

    remove(id: number) {
        return `This action removes a #id user`
    }
}
