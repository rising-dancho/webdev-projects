import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const baseURL = '/api/v1';

// body parser? (built-in) express.json() used to parse request.body.
// https://expressjs.com/en/5x/api.html#express.json
app.use(express.json()); // this allows us to use request.body = this is the data (the object you are posting in data.json )

// GET
app.get(`${baseURL}/pokemons`, (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  response.status(200);
  response.send({
    message: 'List of Pokemons',
    data: pokemons,
  });
});

// POST
app.post(`${baseURL}/pokemons`, (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  pokemons.push(request.body);

  fs.writeFileSync('./data.json', JSON.stringify(pokemons));

  response.status(201);
  response.send({
    message: 'New pokemon was added',
    data: request.body,
  });
});

// No specific path {{HOST}}
app.use('/', (_request, response) => {
  return response.send({ app_name: 'pokemon_api' });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);

// {{HOST}}/api/v1/pokemons
// know which ports are currently listening: 
// netstat -ano | findstr "LISTENING"