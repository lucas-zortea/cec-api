import { Router } from 'express';
import { ensuredAuthenticated } from '../middlewares/ensureAlthenticated';
import { CreateClassroomController } from '../modules/meetings/useCases/createClassroom/CreateClassroomController';

const classroomsRouter = Router();

const createClassroomController = new CreateClassroomController();

classroomsRouter.use(ensuredAuthenticated);

classroomsRouter.post("/", createClassroomController.handle);

export { classroomsRouter };