import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve(__dirname, '../../dist/', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return `${process.env.BASE_URL}/` + fileName
        } catch (error) {
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }
}
