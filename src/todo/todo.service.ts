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

    // Created the service for the manager to assign task to his subordinate
    createMangedTodo(item: string, personalized: boolean, ownerId: number, assignedBy: string) {
        const todolist = this.repo.create({ item, personalized, ownerId, assignedBy });

        return this.repo.save(todolist);
    }

    // Read all todo list associated with a singler person
    readSpecificTodo(id: number) {
        return this.repo.findOneBy({ id });
    }

    readSpecificUserTodo(ownerId: number, id: number) {
        return this.repo.findOneBy({ id, ownerId });
    }

    // These will open all personalized blogs
    readAllPersonalized() {
        return this.repo.findBy({ personalized: true });
    }

    readSpecificPersonalized(ownerId: number) {
        return this.repo.findBy({ ownerId });
    }

    // These will display all the managers messages for every user and manager
    readMangerAssignedTask() {
        return this.repo.findBy({ personalized: false });
    }

    readSpecificMangerAssignedTask(manager: string) {
        return this.repo.findBy({ assignedBy: manager });
    }
}
