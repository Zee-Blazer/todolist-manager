import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Staff } from './staff.entity';

@Injectable()
export class StaffService {
    constructor(@InjectRepository(Staff) private repo: Repository<Staff>) {}

    create(username: string, password: string, role: string){
        const staff = this.repo.create({ username, password, role });

        return this.repo.save(staff);
    }

    find() {
        return this.repo.find();
    }

    async findOne(id: number){
        const staff = await this.repo.findOneBy({ id });

        if(!staff) throw new NotFoundException("User not found!");

        return staff;
    }
}
