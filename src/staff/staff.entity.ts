import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}