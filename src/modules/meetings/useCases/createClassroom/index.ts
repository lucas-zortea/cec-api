import { ClassroomsRepository } from "../../repositories/implementations/ClassroomsRepository";
import { CreateClassroomController } from "./CreateClassroomController";
import { CreateClassroomUseCase } from "./CreateClassroomUseCase";


const classroomsRepository = new ClassroomsRepository();

const createClassroomUseCase = new CreateClassroomUseCase(classroomsRepository);

const createClassroomController = new CreateClassroomController(createClassroomUseCase);

export { createClassroomController };