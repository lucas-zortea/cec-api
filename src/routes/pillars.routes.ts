import { Router } from 'express';

import { PillarsRepository } from '../repositories/PillarsRepository';
import { PostgresPillarRepository } from '../repositories/PostgresPillarRepository';
import { CreatePillarService } from '../services/CreatePillarService';

const pillarRouters = Router();
const pillarsRepository = new PostgresPillarRepository()


pillarRouters.post("/", (request, response) => {
    const { name, description } = request.body;

    const createPillarService = new CreatePillarService(pillarsRepository);

    createPillarService.execute({ name, description });

    return response.status(201).send();
});

pillarRouters.get("/", (request, response) => {
    const all = pillarsRepository.list()
    
    return response.json(all);
})

export { pillarRouters };