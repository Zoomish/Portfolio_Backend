import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Project } from 'src/projects/model/project.model'
import { Skill } from 'src/skill/model/skill.model'

interface UserCreationAttrs {
    name: string
    email: string
    image: string
    github: string
    expirience: string
    skills: string
    work: string
    portfolio: string
}
@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string

    @Column({ type: DataType.STRING, allowNull: false })
    email: string

    @Column({ type: DataType.STRING, allowNull: false })
    image: string

    @Column({ type: DataType.STRING, allowNull: false })
    expirience: string

    @Column({ type: DataType.STRING, allowNull: false })
    work: string

    @HasMany(() => Skill)
    skills: Skill[]

    @HasMany(() => Project)
    projects: Project[]

    @Column({ type: DataType.STRING, allowNull: false })
    github: string

    @Column({ type: DataType.STRING, allowNull: false })
    portfolio: string

    @Column({ type: DataType.STRING, allowNull: false })
    phone: string

    @Column({ type: DataType.STRING, allowNull: false })
    tg: string
}
