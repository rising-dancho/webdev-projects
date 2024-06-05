import { Schema, model } from 'mongoose';

// schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true],
    },
    email: {
      type: String,
      required: [true],
      unique: true,
    },
    password: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

// model
const User = model('User', userSchema);

export default User;
