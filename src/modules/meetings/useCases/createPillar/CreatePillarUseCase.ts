import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { IPillarRepository } from "../../repositories/IPillarsRepository";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreatePillarUseCase {

    constructor(
        @inject("PillarsRepository")
        private pillarsRepository: IPillarRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const pillarAlreadyExists = await this.pillarsRepository.findByName(name);

        if (pillarAlreadyExists) {
            throw new AppError("Pillar already exists!")
        }

        this.pillarsRepository.create({ name, description })
    }

}

export { CreatePillarUseCase }