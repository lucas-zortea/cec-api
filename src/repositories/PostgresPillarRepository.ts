import { Pillar } from "../model/Pillar";
import { ICreatePillarDTO, IPillarRepository } from "./IPillarRepository";


class PostgresPillarRepository implements IPillarRepository {
    findByName(name: string): Pillar {
        console.log(name);
        return null;
    }
    list(): Pillar[] {
        return null;
    }
    create({ name, description }: ICreatePillarDTO): void {
        console.log(name, description);
    }

}

export { PostgresPillarRepository };