import { Request, Response } from 'express';
import { CreateClassroomUseCase } from './CreateClassroomUseCase';

class CreateClassroomController{

    constructor(private createClassroomUseCase: CreateClassroomUseCase){}

    handle(request: Request, response: Response): Response {
        const { name, description, capacity } = request.body;
    
        this.createClassroomUseCase.execute({ name, description, capacity });
    
        return response.status(201).send();
    }
};

export { CreateClassroomController };