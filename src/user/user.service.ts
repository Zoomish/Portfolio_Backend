import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}
    async create(createUserDto: CreateUserDto) {
        const project = await this.userRepository.create({
            ...createUserDto,
        })
        return project
    }

    async findAll() {
        return await this.userRepository.findOne({
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
