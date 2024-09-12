import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { StaffService } from './staff.service'; // Staff entity
import { CreateStaffDto } from './dtos/create-staff.dto';
import { UpdateStaffDto } from './dtos/update-staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService) {}

    @Post("/auth")
    createStaff(@Body() body: CreateStaffDto) {
        return this.staffService.create(body.username, body.password, body.role);
    }

    @Get()
    allStaffs() {
        return this.staffService.find();
    }

    @Get("/:id")
    specificStaff(@Param('id') id: string) {
        return this.staffService.findOne(parseInt(id));
    }

    @Patch("/:id")
    editStaff(@Param("id") id: string, @Body() body: UpdateStaffDto) {
        return this.staffService.editOne(parseInt(id), body);
    }

    @Delete("/:id")
    deleteStaff(@Param("id") id: string) {
        return this.staffService.deleteOne(parseInt(id));
    }
}
