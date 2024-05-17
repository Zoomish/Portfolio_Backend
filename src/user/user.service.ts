import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'
import { FilesService } from 'src/files/files.service'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private fileService: FilesService
    ) {}
    async create(createUserDto: CreateUserDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const project = await this.userRepository.create({
            ...createUserDto,
            image: fileName,
        })
        return project
    }

    async findAll() {
        return await this.userRepository.findOne()
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
