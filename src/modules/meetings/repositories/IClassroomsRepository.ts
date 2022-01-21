import { Classroom } from "../entities/Classroom";


interface ICreateClassroomDTO{
    name: string;
    description: string;
    capacity: number;
}

interface IClassroomsRepository{
    create({ capacity, description, name }: ICreateClassroomDTO): Promise<void>;
    findByName(name: string): Promise<Classroom>;
}

export { ICreateClassroomDTO, IClassroomsRepository }