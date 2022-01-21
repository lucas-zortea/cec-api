import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { IClassroomsRepository } from '../../modules/meetings/repositories/IClassroomsRepository';
import { ClassroomsRepository } from '../../modules/meetings/repositories/implementations/ClassroomsRepository';
import { PillarsRepository } from '../../modules/meetings/repositories/implementations/PillarsRepository';
import { IPillarRepository } from '../../modules/meetings/repositories/IPillarsRepository';

container.registerSingleton<IPillarRepository>(
    "PillarsRepository",
    PillarsRepository
);

container.registerSingleton<IClassroomsRepository>(
    "ClassroomsRepository",
    ClassroomsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);