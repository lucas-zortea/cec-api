import { Classroom } from "../../model/Classroom";
import { IClassroomsRepository, ICreateClassroomDTO } from "../IClassroomsRepository";


class ClassroomsRepository implements IClassroomsRepository {
    private classrooms: Classroom[];

    constructor(){
        this.classrooms = [];
    }

    create({ capacity, description, name }: ICreateClassroomDTO): void {
        const classroom = new Classroom();

        Object.assign(classroom, {
            name,
            description,
            capacity,
            created_at: new Date()
        });

        this.classrooms.push(classroom);
    }

    findByName(name: string): Classroom {
        const classroom = this.classrooms.find(classroom => classroom.name == name);
        return classroom;
    }


}

export { ClassroomsRepository }