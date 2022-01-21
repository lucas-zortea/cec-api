import { Pillar } from "../entities/Pillar";

interface ICreatePillarDTO {
    name: string;
    description: string;
}


interface IPillarRepository{
    findByName(name: string): Promise<Pillar>;
    list(): Promise<Pillar[]>;
    create({ name, description }: ICreatePillarDTO): Promise<void>;
}

export { IPillarRepository, ICreatePillarDTO };