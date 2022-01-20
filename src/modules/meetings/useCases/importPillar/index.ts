import { PillarsRepository } from "../../repositories/implementations/PillarsRepository";
import { ImportPillarController } from "./ImportPillarController";
import { ImportPillarUseCase } from "./ImportPillarUseCase";

const pillarsRepository = PillarsRepository.getInstance();
const importPillarUseCase = new ImportPillarUseCase(pillarsRepository);
const importPillarController = new ImportPillarController(importPillarUseCase);

export { importPillarController };