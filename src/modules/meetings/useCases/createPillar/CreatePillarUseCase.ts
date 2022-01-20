import { IPillarRepository } from "../../repositories/IPillarsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreatePillarUseCase {

    constructor(private pillarsRepository: IPillarRepository) {}

    execute({ description, name }: IRequest): void {
        const pillarAlreadyExists = this.pillarsRepository.findByName(name);

        if (pillarAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.pillarsRepository.create({ name, description })
    }

}

export { CreatePillarUseCase }