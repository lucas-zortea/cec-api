import { Request, Response } from 'express';
import { ListPillarsUseCase } from './ListPillarsUseCase';

class ListPillarsController {
    constructor(private listPillarUseCase: ListPillarsUseCase) {}

    handle(request: Request, response: Response): Response{
        const all = this.listPillarUseCase.execute();
    
        return response.json(all);
    }
};

export { ListPillarsController };