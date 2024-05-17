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

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string

    @Column({ type: DataType.STRING, allowNull: false })
    description: string

    @Column({ type: DataType.STRING, allowNull: false })
    image: string

    @Column({ type: DataType.STRING, allowNull: false })
    tags: string

    @Column({ type: DataType.STRING, allowNull: false })
    repository: string

    @Column({ type: DataType.STRING, allowNull: false })
    live: string

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @BelongsTo(() => User)
    user: User
}
