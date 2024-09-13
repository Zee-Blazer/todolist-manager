import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoList {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: true })
    personalized: boolean;

    @Column()
    ownerId: number;

    @Column()
    item: string;

    @Column({ default: "self" })
    assignedBy: string;
}