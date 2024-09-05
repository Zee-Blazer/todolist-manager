import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { ManagerModule } from './manager/manager.module';
import { TodoModule } from './todo/todo.module';

import { TypeOrmModule } from '@nestjs/typeorm'; // TypeORM

import { Manager } from './manager/manager.entity'; // Manager Entity
import { Staff } from './staff/staff.entity'; // Staff Entity

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: "database.sqlite",
    entities: [ Manager, Staff ],
    synchronize: true
  }), StaffModule, ManagerModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
