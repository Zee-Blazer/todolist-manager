import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

import { ManagerService } from './manager.service'; // Manager Service
import { CreateManagerDto } from './dtos/create-manager.dto'; // Create Manager DTO
import { UpdateManagerDto } from './dtos/update-manager.dto'; // Update Manager DTO

@Controller('manager')
export class ManagerController {
    constructor (private managerService: ManagerService) {}

    @Post('/auth')
    createManager(@Body() body: CreateManagerDto) {
        return this.managerService.create(body.username, body.password, body.role);
    }

    @Get()
    getAllManagers(){
        return this.managerService.find();
    }

    @Get("/id")
    getSpecificManager(@Param("id") id: string) {
        return this.managerService.findOne(parseInt(id));
    }

    @Patch("/:id")
    updateManagerRecord(@Param("id") id: string, @Body() body: UpdateManagerDto) {
        return this.managerService.updateOne(parseInt(id), body);
    }

    @Delete("/:id")
    removeManagerRecord(@Param("id") id: string) {
        return this.managerService.removeManager(parseInt(id));
    }
}
