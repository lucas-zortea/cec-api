import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateClassroomUseCase } from './CreateClassroomUseCase';

class CreateClassroomController{


    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, capacity } = request.body;

        const createClassroomUseCase = container.resolve(CreateClassroomUseCase)
    
        await createClassroomUseCase.execute({ name, description, capacity });
    
        return response.status(201).send();
    }
};

export { CreateClassroomController };