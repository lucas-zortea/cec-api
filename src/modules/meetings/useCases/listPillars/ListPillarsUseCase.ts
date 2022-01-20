import { Pillar } from "../../model/Pillar";
import { IPillarRepository } from "../../repositories/IPillarsRepository";

class ListPillarsUseCase {

    constructor(private pillarsRepository: IPillarRepository) { }

    execute(): Pillar[] {
        const pillars = this.pillarsRepository.list();

        return pillars;
    }
};

export { ListPillarsUseCase };