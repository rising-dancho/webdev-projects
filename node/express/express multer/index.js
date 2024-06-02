import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse incoming data and attach the request to the data: body property for request object

app.use('/', (req, res) => res.send({ app: 'multer' }));

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
