import { Column, DataType, Model, Table } from 'sequelize-typescript'

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
@Table({ tableName: 'skill' })
export class Skill extends Model<Skill, UserCreationAttrs> {
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

    @Column({ type: DataType.STRING, allowNull: false })
    skills: string

    @Column({ type: DataType.STRING, allowNull: false })
    github: string

    @Column({ type: DataType.STRING, allowNull: false })
    portfolio: string
}
