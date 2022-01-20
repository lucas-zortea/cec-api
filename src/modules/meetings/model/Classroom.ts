import { v4 as uuidv4 } from 'uuid';

class Classroom{
    id?: string;
    name: string;
    description: string;
    capacity: number;
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { Classroom }