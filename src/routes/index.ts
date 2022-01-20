import { Router } from 'express';
import { pillarRouters } from './pillars.routes';
import { classroomsRouter } from './classrooms.routes';

const router = Router();

router.use("/pillars", pillarRouters);
router.use("/classrooms", classroomsRouter);

export { router };