import { Router } from 'express';
import {
  getAllWorkout,
  getWorkout,
  postWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workouts.controller.js';

// initialize router
const router = Router();

router.get('/', getAllWorkout);
router.get('/:id', getWorkout);
router.post('/', postWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', updateWorkout);

export default router;
