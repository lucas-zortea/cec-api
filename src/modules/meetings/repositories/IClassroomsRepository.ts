import { Classroom } from "../model/Classroom";


interface ICreateClassroomDTO{
    name: string;
    description: string;
    capacity: number;
}

interface IClassroomsRepository{
    create({ capacity, description, name }: ICreateClassroomDTO): void;
    findByName(name: string): Classroom;
}

export { ICreateClassroomDTO, IClassroomsRepository }