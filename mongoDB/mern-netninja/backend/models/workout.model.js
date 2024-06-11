import { Schema, model } from 'mongoose';

// Schema: enforces the schema on the objects entering the database
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// model
const Workout = model('Workout', workoutSchema);

export default Workout;

