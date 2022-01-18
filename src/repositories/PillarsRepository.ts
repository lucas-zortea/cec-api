import { Pillar } from '../model/Pillar'
import { IPillarRepository, ICreatePillarDTO } from './IPillarRepository';



class PillarsRepository implements IPillarRepository {

    private pillars: Pillar[];

    constructor() {
        this.pillars = [];
    }

    create({ description, name }: ICreatePillarDTO): void {
        const pillar = new Pillar()

        Object.assign(pillar, {
            name,
            description,
            created_at: new Date()
        })

        this.pillars.push(pillar);
    }

    list(): Pillar[] {
        return this.pillars
    }

    findByName(name: string): Pillar {
        const pillar = this.pillars.find((pillar) => pillar.name === name);
        return pillar;
    }
}

export { PillarsRepository }