import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TodoList } from './todo.enity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoList) private repo: Repository<TodoList>) {}

    // This service provides the ability to create personalized todolist
    createPersonalTodo(item: string, ownerId: number) {
        const todolist = this.repo.create({ item, ownerId });

        return this.repo.save(todolist);
    }

    createMangedTodo(item: string, personalized: boolean, ownerId: number, assignedBy: string) {
        const todolist = this.repo.create({ item, personalized, ownerId, assignedBy });

        return this.repo.save(todolist);
    }

    readAllPersonalized() {
        return this.repo.findOneBy({ personalized: true });
    }

    readMangerAssignedTask() {
        return this.repo.findOneBy({ personalized: false });
    }

    readSpecificMangerAssignedTask(manager: string) {
        return this.repo.findOneBy({ assignedBy: manager });
    }
}
