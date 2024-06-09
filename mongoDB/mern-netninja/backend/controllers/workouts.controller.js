import Workout from '../models/workout.model.js';

// GET all workouts
const getAllWorkout = async (req, res) =>
  res.send({ message: 'GET a single workouts' });

// GET a single workout
const getWorkout = async (req, res) =>
  res.send({ message: 'GET a single workouts' });

// POST a single workout
const postWorkout = async (req, res) => {
  // extract from the body
  const { title, load, reps } = req.body;

  try {
    // create from the model by passing in the title, load, reps from the body
    const workout = await Workout.create({ title, load, reps });
    // response code and sending the json file
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// DELETE a workout
const deleteWorkout = async (req, res) =>
  res.send({ message: 'DELETE a single workouts' });

// UPDATE a single workout
const updateWorkout = async (req, res) =>
  res.send({ message: 'UPDATE a single workouts' });

export { getAllWorkout, getWorkout, postWorkout, deleteWorkout, updateWorkout };
