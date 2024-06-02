import express from 'express';
import userRouter from './routes/user.routes.js';

const app = express();
const PORT = 8080;
const baseURL = '/api/v1';

// information log:
function logger(req, res, next) {
  console.log('Request method: ', req.method, '\nRequest url: ', req.url);
  next(); //essentially allows `app.use` to go to the next method
}
app.use(logger);

// setup middleware and auto parse incoming data
app.use(express.json());

app.use('/', userRouter);
app.use(`${baseURL}/users`, userRouter);

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
