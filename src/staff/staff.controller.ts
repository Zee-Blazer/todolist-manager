import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import { StaffService } from './staff.service'; // Staff entity
import { CreateStaffDto } from './dtos/create-staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService) {}

    @Post()
    createStaff(@Body() body: CreateStaffDto) {}
}
