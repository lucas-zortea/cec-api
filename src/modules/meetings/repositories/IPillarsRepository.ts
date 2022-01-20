import { Pillar } from "../model/Pillar";

interface ICreatePillarDTO {
    name: string;
    description: string;
}


interface IPillarRepository{
    findByName(name: string): Pillar;
    list(): Pillar[];
    create({ name, description }: ICreatePillarDTO): void;
}

export { IPillarRepository, ICreatePillarDTO };