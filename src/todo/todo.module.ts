import { Module, Global } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './todo.enity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ TodoList ])],
  providers: [TodoService],
  controllers: [TodoController],
  exports: [TodoService]
})
export class TodoModule {}
