import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Manager } from './manager.entity'; // Manager Entity

@Injectable()
export class ManagerService {
    constructor(@InjectRepository(Manager) private repo: Repository<Manager>) {}

    create(username: string, password: string, id: number, role: string) {
        const manager = this.repo.create({ username, password, id, role });

        return this.repo.save(manager);
    }
}
