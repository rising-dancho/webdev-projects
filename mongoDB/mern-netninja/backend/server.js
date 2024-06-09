import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.routes.js';

// enable .env variable: "process" is a global object available in node applications
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT;
const baseURL = '/api/v1/';

// middlewares from express
//attaches .body to the req handler
app.use(express.json());

// logger
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(`${baseURL}workouts`, workoutRoutes);

// connect to db mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () =>
      console.log(`Connected to db and listening on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
