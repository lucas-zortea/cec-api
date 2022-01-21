import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";

interface IRequest {
    name: string,
    description: string,
    capacity: number
}

@injectable()
class CreateClassroomUseCase {
    constructor(
        @inject("ClassroomsRepository")
        private ClassroomsRepository: IClassroomsRepository) { }
    async execute({ name, description, capacity }: IRequest): Promise<void> {
        const classroomAlreadyExists = await this.ClassroomsRepository.findByName(name);
        if (classroomAlreadyExists) {
            throw new AppError("Classroom already exists!")
        }
        await this.ClassroomsRepository.create({
            name,
            description,
            capacity
        })
    }

}

export { CreateClassroomUseCase }