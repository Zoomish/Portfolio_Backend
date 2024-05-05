import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface ProjectCreationAttrs {
    title: string
    description: string
    image: string
    tags: string[]
}
@Table({ tableName: 'projects' })
export class Project extends Model<Project, ProjectCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number

    @ApiProperty({ example: 'test@gmail.com', description: 'Уникальная почта' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string

    @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: true })
    description: string

    @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: true })
    image: string

    @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.ARRAY, allowNull: true })
    tags: string[]
}
