import { IPillarRepository } from "../repositories/IPillarRepository";
import { PillarsRepository } from "../repositories/PillarsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreatePillarService {

    constructor(private pillarsRepository: IPillarRepository) {}

    execute({ description, name }: IRequest): void {
        const pillarAlreadyExists = this.pillarsRepository.findByName(name);

        if (pillarAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.pillarsRepository.create({ name, description })
    }

}

export { CreatePillarService }