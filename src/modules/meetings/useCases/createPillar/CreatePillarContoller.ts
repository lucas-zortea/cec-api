import { Response, Request } from 'express';
import { CreatePillarUseCase } from './CreatePillarUseCase';

class CreatePillarController{
    constructor(private createPillarUseCase: CreatePillarUseCase) {}

    handle(request: Request, response: Response): Response{
        const { name, description } = request.body;
    
        this.createPillarUseCase.execute({ name, description });
    
        return response.status(201).send();
    }
}

export { CreatePillarController };