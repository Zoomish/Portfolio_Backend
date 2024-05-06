import { Injectable } from '@nestjs/common'
import { Project } from './model/project.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateProjectDto } from './dto/create-project.dto'
import { FilesService } from 'src/files/files.service'

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Project) private projectRepository: typeof Project,
        private fileService: FilesService
    ) {}
    async findAll() {
        return await this.projectRepository.findAll({
            include: { all: true },
        })
    }

    async create(dto: CreateProjectDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.projectRepository.create({
            ...dto,
            image: fileName,
        })
        return post
    }

    findOne(id: number) {
        return `This action returns a #id projects-service`
    }

    update(id: number) {
        return `This action updates a #id projects-service`
    }

    remove(id: number) {
        return `This action removes a #id projects-service`
    }
}
