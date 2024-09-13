import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './todo.enity';

@Module({
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
