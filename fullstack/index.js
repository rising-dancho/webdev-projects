import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import userRoutes from './routes/user.routes.js';
import blogRoutes from './routes/blog.routes.js';

dotenv.config();

const app = express();
const baseURL = '/api/v1';

db();

app.use(express.json());

app.use(`${baseURL}/users`, userRoutes);
app.use(`${baseURL}/blogs`, blogRoutes);


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
