import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Manager } from './manager.entity'; // Manager Entity

@Injectable()
export class ManagerService {
    constructor(@InjectRepository(Manager) private repo: Repository<Manager>) {}

    create(username: string, password: string, role: string) {
        const manager = this.repo.create({ username, password, role });

        return this.repo.save(manager);
    }

    find() {
        return this.repo.find();
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }
}
