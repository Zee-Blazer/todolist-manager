import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TodoList } from './todo.enity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoList) private repo: Repository<TodoList>) {}

    createPersonalTodo(item: string, ownerId: number) {
        const todolist = this.repo.create({ item, ownerId });

        return this.repo.save(todolist);
    }

    createMangedTodo(item: string, personalized: boolean, ownerId: number, assignedBy: string) {}
}
