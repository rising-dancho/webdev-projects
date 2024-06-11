import express from 'express';
import { loginUser, signupUser } from '../controllers/user.controller.js';

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

export default router;
