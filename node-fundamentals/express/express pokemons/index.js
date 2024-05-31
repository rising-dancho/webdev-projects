import express from 'express';
import dotenv from 'dotenv';
import pokemonsRouter from './routes/pokemons.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const baseURL = '/api/v1';

// body parser? (built-in) express.json() used to parse request.body.
// https://expressjs.com/en/5x/api.html#express.json
app.use(express.json()); // this allows us to use request.body = this is the data (the object you are posting in data.json )

// No specific path {{HOST}}
// information: logs
function logger(req, res, next) {
  console.log(
    'Request method: ',
    req.method,
    '\nRequest url: ',
    `http://localhost:${PORT}${req.url}`
  );
  next(); //essentially allows `app.use` to go to the next method
}
app.use(logger);

// GET, POST : raw json are all in the the router. router routs to the correct destination
app.use(`${baseURL}/pokemons`, pokemonsRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// {{HOST}}/api/v1/pokemons
// know which ports are currently listening:
// netstat -ano | findstr "LISTENING"
