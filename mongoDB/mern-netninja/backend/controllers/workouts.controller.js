import Workout from '../models/workout.model.js';
import { Types } from 'mongoose';

// GET all workouts
const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({});
  try {
    res.status(200).send({ message: 'All workouts', data: workouts });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such workout' });
  }

  // find the workout in by id
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).send({ error: 'No such workout' });
  }

  res.status(200).send({ message: `Workout with id: ${id}` });
};

// POST a single workout
const postWorkout = async (req, res) => {
  // extract from the body
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all fields', emptyFields });
  }

  try {
    // create from the model by passing in the title, load, reps from the body
    const workout = await Workout.create({ title, load, reps });
    // response code and sending the json file
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such workout' });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);
};

// UPDATE a single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such workout' });
  }

  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  res.status(200).send({
    message: `Workout with id: ${id} updated successfully!`,
    data: workout,
  });
};

export { getAllWorkout, getWorkout, postWorkout, deleteWorkout, updateWorkout };
