import { Pillar } from '../../model/Pillar'
import { IPillarRepository, ICreatePillarDTO } from '../IPillarsRepository';



class PillarsRepository implements IPillarRepository {

    private pillars: Pillar[];

    private static INSTANCE: PillarsRepository;

    private constructor() {
        this.pillars = [];
    }

    public static getInstance(): PillarsRepository{
        if(!PillarsRepository.INSTANCE){
            PillarsRepository.INSTANCE = new PillarsRepository();
        }

        return PillarsRepository.INSTANCE;
    };

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