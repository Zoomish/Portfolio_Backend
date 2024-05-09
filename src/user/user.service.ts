import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'
import { FilesService } from 'src/files/files.service'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private projectRepository: typeof User,
        private fileService: FilesService
    ) {}
    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user'
    }

    findAll() {
        return `This action returns all users`
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
