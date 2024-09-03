import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    role: string;

    @Column()
    password: string;
}
