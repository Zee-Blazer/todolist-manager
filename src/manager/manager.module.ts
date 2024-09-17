import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './manager.entity'; // Manager Entity

@Module({
  imports: [TypeOrmModule.forFeature([ Manager ])],
  providers: [ManagerService],
  controllers: [ManagerController]
})
export class ManagerModule {}
