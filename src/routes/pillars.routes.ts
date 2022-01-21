import { Router } from 'express';
import multer from 'multer';
import { CreatePillarController } from '../modules/meetings/useCases/createPillar/CreatePillarContoller'
import { ImportPillarController } from '../modules/meetings/useCases/importPillar/ImportPillarController';
import { ListPillarsController } from '../modules/meetings/useCases/listPillars/ListPillarsController';

const pillarRouters = Router();

const upload = multer({
    dest: "./tmp"
});

const createPillarController = new CreatePillarController();

const importPillarController = new ImportPillarController();

const listPillarController = new ListPillarsController();

pillarRouters.post("/", createPillarController.handle);

pillarRouters.get("/", listPillarController.handle);

pillarRouters.post("/import", importPillarController.handle);

export { pillarRouters };