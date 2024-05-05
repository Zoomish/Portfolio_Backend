import { Injectable } from '@nestjs/common'

@Injectable()
export class ProjectsService {
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
