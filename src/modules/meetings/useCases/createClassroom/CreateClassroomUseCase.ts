import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";

interface IRequest {
    name: string,
    description: string,
    capacity: number
}


class CreateClassroomUseCase {
    constructor(private ClassroomsRepository: IClassroomsRepository) { }
    execute({ name, description, capacity }: IRequest): void {
        const classroomAlreadyExists = this.ClassroomsRepository.findByName(name);
        if (classroomAlreadyExists) {
            throw new Error("Classroom already exists!")
        }
        this.ClassroomsRepository.create({
            name,
            description,
            capacity
        })
    }

}

export { CreateClassroomUseCase }