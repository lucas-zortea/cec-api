import { Pillar } from '../../entities/Pillar'
import { IPillarRepository, ICreatePillarDTO } from '../IPillarsRepository';

import { getRepository, Repository } from 'typeorm';



class PillarsRepository implements IPillarRepository {

    private repository: Repository<Pillar>;

    constructor() {
        this.repository = getRepository(Pillar);
    }

    async create({ description, name }: ICreatePillarDTO): Promise<void> {
        const pillar = this.repository.create({
            description,
            name
        });

        await this.repository.save(pillar);
    }

    async list(): Promise<Pillar[]> {
        const pillars = await this.repository.find();
        return pillars;
    }

    async findByName(name: string): Promise<Pillar> {
        const pillar = await this.repository.findOne({ name })
        return pillar;
    }
}

export { PillarsRepository }