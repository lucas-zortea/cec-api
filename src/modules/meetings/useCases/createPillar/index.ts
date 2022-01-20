import { PillarsRepository } from "../../repositories/implementations/PillarsRepository";
import { CreatePillarController } from "./CreatePillarContoller";
import { CreatePillarUseCase } from "./CreatePillarUseCase";

const pillarsRepository = PillarsRepository.getInstance()
const createPillarUseCase = new CreatePillarUseCase(pillarsRepository);
const createPillarContoller = new CreatePillarController(createPillarUseCase);

export { createPillarContoller };