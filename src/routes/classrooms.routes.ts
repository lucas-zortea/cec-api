import { Router } from 'express';
import { createClassroomController } from '../modules/meetings/useCases/createClassroom';

const classroomsRouter = Router();

classroomsRouter.post("/", (request, response) => {
    return createClassroomController.handle(request, response);
})

export { classroomsRouter };