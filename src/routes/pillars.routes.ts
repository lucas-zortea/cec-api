import { Router } from 'express';
import multer from 'multer';

import { createPillarContoller } from '../modules/meetings/useCases/createPillar';
import { importPillarController } from '../modules/meetings/useCases/importPillar';
import { listPillarsController } from '../modules/meetings/useCases/listPillars';

const pillarRouters = Router();

const upload = multer({
    dest: "./tmp"
});

pillarRouters.post("/", (request, response) => {
    return createPillarContoller.handle(request, response);
});

pillarRouters.get("/", (request, response) => {
    return listPillarsController.handle(request, response);
});

pillarRouters.post("/import", upload.single("file"), (request, response) => {
    return importPillarController.handle(request, response);
});

export { pillarRouters };