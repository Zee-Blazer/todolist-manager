import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { ManagerModule } from './manager/manager.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [StaffModule, ManagerModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
