import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/v1/workouts', workoutRoutes);
app.use('/api/v1/user', userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
