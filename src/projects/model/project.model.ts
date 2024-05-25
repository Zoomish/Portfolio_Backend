import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript'
import { User } from 'src/user/model/user.model'

interface ProjectCreationAttrs {
    title: string
    description: string
    image: string
    tags: string
    repository: string
    live: string
    userId: number
}
@Table({ tableName: 'projects' })
export class Project extends Model<Project, ProjectCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number

    @Column({ type: DataType.STRING(4048), unique: true, allowNull: false })
    title: string

    @Column({ type: DataType.STRING(4048), allowNull: false })
    description: string

    @Column({ type: DataType.STRING(4048), allowNull: false })
    image: string

    @Column({ type: DataType.STRING(4048), allowNull: false })
    tags: string

    @Column({ type: DataType.STRING(4048), allowNull: false })
    repository: string

    @Column({ type: DataType.STRING(4048), allowNull: false })
    live: string

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @BelongsTo(() => User)
    user: User
}
