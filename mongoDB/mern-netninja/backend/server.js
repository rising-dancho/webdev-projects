import express from 'express';
import dotenv from 'dotenv';

// enable .env variable: "process" is a global object available in node applications
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT;

// routes
app.get('/', function (req, res) {
  res.json({ message: 'backend app' });
});

// listen for requests
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
