import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';

import { TypeOrmModule } from '@nestjs/typeorm'; // Type ORM Entity
import { Staff } from './staff.entity'; // Staff entity

@Module({
  imports: [TypeOrmModule.forFeature([ Staff ])],
  providers: [StaffService],
  controllers: [StaffController]
})
export class StaffModule {}
