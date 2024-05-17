import { Injectable } from '@nestjs/common'
import { Project } from './model/project.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateProjectDto } from './dto/create-project.dto'
import { FilesService } from 'src/files/files.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Project) private projectRepository: typeof Project,
        private fileService: FilesService,
        private userService: UserService
    ) {}
    async findAll() {
        return await this.projectRepository.findAll()
    }

    async create(dto: CreateProjectDto, image: any) {
        const user = await this.userService.findAll()
        const fileName = await this.fileService.createFile(image)
        const project = await this.projectRepository.create({
            ...dto,
            image: fileName,
            userId: user.id,
        })
        return project
    }

    async findOne(id: number) {
        return await this.projectRepository.findByPk(id)
    }

    update(id: number) {
        return `This action updates a #id projects-service`
    }

    remove(id: number) {
        return `This action removes a #id projects-service`
    }
}
