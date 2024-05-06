import { Module } from '@nestjs/common'
import { ProjectsModule } from './projects/projects.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { Project } from './projects/model/project.model'
import { FilesModule } from './files/files.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
            models: [Project],
            autoLoadModels: true,
            synchronize: true,
        }),
        ProjectsModule,
        FilesModule,
    ],
})
export class AppModule {}
