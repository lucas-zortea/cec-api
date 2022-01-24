import { Pillar } from "../../entities/Pillar";
import { ICreatePillarDTO, IPillarRepository } from "../IPillarsRepository";


class PillarsRepositoryInMemory implements IPillarRepository {

    pillars: Pillar[] = [];


    async findByName(name: string): Promise<Pillar> {
        const pillar = this.pillars.find(pillar => pillar.name == name);
        return pillar;
    }    
    async list(): Promise<Pillar[]> {
        const pillars = this.pillars;
        return pillars;
    }
    async create({ name, description }: ICreatePillarDTO): Promise<void> {
        const pillar = new Pillar();

        Object.assign(pillar, {
            name,
            description
        });

        this.pillars.push(pillar);
    }

}

export { PillarsRepositoryInMemory };