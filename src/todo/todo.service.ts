import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TodoList } from './todo.enity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoList) private repo: Repository<TodoList>) {}
}
