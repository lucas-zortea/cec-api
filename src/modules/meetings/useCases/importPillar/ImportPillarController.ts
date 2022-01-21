import "reflect-metadata";
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportPillarUseCase } from './ImportPillarUseCase';

class ImportPillarController{
    

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importPillarUseCase = container.resolve(ImportPillarUseCase)

        await importPillarUseCase.execute(file);

        return response.send();
    }
}

export { ImportPillarController };