import { Request, Response } from 'express';
import { ImportPillarUseCase } from './ImportPillarUseCase';

class ImportPillarController{
    constructor(private importPillarUseCase: ImportPillarUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importPillarUseCase.execute(file);
        return response.send();
    }
}

export { ImportPillarController };