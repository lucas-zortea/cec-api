import "reflect-metadata";
import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreatePillarUseCase } from './CreatePillarUseCase';

class CreatePillarController{

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description } = request.body;

        const createPillarUseCase = container.resolve(CreatePillarUseCase);

        await createPillarUseCase.execute({ name, description });
    
        return response.status(201).send();
    }
}

export { CreatePillarController };