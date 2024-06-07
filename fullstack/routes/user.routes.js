import { Router } from 'express';
import { signup, signin } from '../controllers/user.controllers.js';

const userRouter = Router();

userRouter.post('/register', signup);
userRouter.post('/login', signin);

export default userRouter;
