import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { ensuredAuthenticated } from '../middlewares/ensureAlthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/uptadeUserAvatar/UpdateUserAvatarController';

const userRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRouter.post("/", createUserController.handle);

userRouter.patch("/avatar", ensuredAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { userRouter };