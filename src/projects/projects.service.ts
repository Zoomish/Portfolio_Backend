import { Injectable } from '@nestjs/common'
import { Project } from './project.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Project) private projectRepository: typeof Project
    ) {}
    findAll() {
        return `This action returns all projects-services`
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
