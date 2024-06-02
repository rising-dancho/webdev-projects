import { Router } from 'express';
import { signup, signin, getAllUsers } from '../controllers/user.controllers.js';

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/', getAllUsers);

export default userRouter;
