import { getRepository, Repository } from "typeorm";
import { Classroom } from "../../entities/Classroom";
import { IClassroomsRepository, ICreateClassroomDTO } from "../IClassroomsRepository";


class ClassroomsRepository implements IClassroomsRepository {
    private repository: Repository<Classroom>

    constructor(){
        this.repository = getRepository(Classroom);
    }

    async create({ capacity, description, name }: ICreateClassroomDTO): Promise<void> {
        const classroom = this.repository.create({
            capacity,
            description,
            name
        });

        await this.repository.save(classroom);
    }

    async findByName(name: string): Promise<Classroom> {
        const classroom = this.repository.findOne({
            name
        })
        return classroom;
    }


}

export { ClassroomsRepository }