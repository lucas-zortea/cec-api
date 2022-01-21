import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListPillarsUseCase } from './ListPillarsUseCase';

class ListPillarsController {
    

    async handle(request: Request, response: Response): Promise<Response>{
        const listPillarUseCase = container.resolve(ListPillarsUseCase)

        const all = await listPillarUseCase.execute();
    
        return response.json(all);
    }
};

export { ListPillarsController };