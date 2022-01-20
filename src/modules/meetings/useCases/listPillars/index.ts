import { PillarsRepository } from "../../repositories/implementations/PillarsRepository";
import { ListPillarsController } from "./ListPillarsController";
import { ListPillarsUseCase } from "./ListPillarsUseCase";

const pillarsRepository = PillarsRepository.getInstance();
const listPillarsUseCase = new ListPillarsUseCase(pillarsRepository);
const listPillarsController = new ListPillarsController(listPillarsUseCase);

export { listPillarsController };