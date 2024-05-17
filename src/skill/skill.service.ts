import { Injectable } from '@nestjs/common'
import { CreatSkillDto } from './dto/create-skill.dto'
import { UpdateUserDto } from './dto/update-skill.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Skill } from './model/skill.model'
import { UserService } from 'src/user/user.service'

@Injectable()
export class SkillService {
    constructor(
        @InjectModel(Skill) private skillRepository: typeof Skill,
        private userService: UserService
    ) {}

    async create(createSkillDto: CreatSkillDto) {
        const user = await this.userService.findAll()
        const skill = await this.skillRepository.create({
            ...createSkillDto,
            userId: user.id,
        })
        return skill
    }

    async findAll() {
        return await this.skillRepository.findAll({
            include: { all: true },
        })
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
