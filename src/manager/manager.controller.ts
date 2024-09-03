import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ManagerService } from './manager.service'; // Manager Service
import { CreateManagerDto } from './dtos/create-manager.dto';

@Controller('manager')
export class ManagerController {
    constructor (private managerService: ManagerService) {}

    @Post('/auth')
    createManager(@Body() body: CreateManagerDto) {
        return this.managerService.create(body.username, body.password, body.role);
    }
}
