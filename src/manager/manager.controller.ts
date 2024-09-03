import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ManagerService } from './manager.service'; // Manager Service
import { CreateManagerDto } from './dtos/create-manager.dto';

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
}
