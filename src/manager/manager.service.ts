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

    async updateOne(id: number, attrs: Partial<Manager>) {
        const manager = await this.repo.findOneBy({ id });

        if(!manager) throw new NotFoundException(`Manager not found!`);
        Object.assign(manager, attrs);
        
        return this.repo.save(manager);
    }

    async removeManager(id: number) {
        const manager = await this.repo.findOneBy({ id });

        if(!manager) throw new NotFoundException("User not found!");

        return this.repo.remove(manager);
    }
}
