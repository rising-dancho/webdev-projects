import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config();

const app = express();
const baseURL = '/api/v1';
const PORT = process.env.PORT;

// mongo db
db();

// attaches body to request object
app.use(express.json());

app.use('/', (req, res) => {
  res.send({ app: 'blog_app' });
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
