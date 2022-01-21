import { inject, injectable } from "tsyringe";
import { Pillar } from "../../entities/Pillar";
import { IPillarRepository } from "../../repositories/IPillarsRepository";

@injectable()
class ListPillarsUseCase {

    constructor(
        @inject("PillarsRepository")
        private pillarsRepository: IPillarRepository) { }

    async execute(): Promise<Pillar[]> {
        const pillars = await this.pillarsRepository.list();

        return pillars;
    }
};

export { ListPillarsUseCase };