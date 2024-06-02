const { createServer } = require('http');
const fs = require('fs');
const {
  getPokemons,
  addPokemon,
  patchPokemon,
  deletePokemon,
} = require('./controllers/controllers.js');

// const getPokemons = require('./controllers/getPokemons');
// const { addPokemon } = require('./controllers/addPokemon');
// const patchPokemon = require('./controllers/patchPokemon');
// const deletePokemon = require('./controllers/deletePokemon');

// docs: https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener
const PORT = 3001;
const server = createServer((request, response) => {
  // console.log(request);
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  const params = {
    pokemons: pokemons,
    request: request,
    response: response,
  };

  if (request.url === '/' && request.method === 'GET') {
    // pagmay nag request sa / at GET method ang ginamit (run code below)
    getPokemons(params);
  } else if (
    request.url === '/api/v1/pokemons/add' &&
    request.method === 'POST'
  ) {
    addPokemon(params);
  } else if (
    request.url.split('/')[4] === 'edit' &&
    request.method === 'PATCH'
  ) {
    patchPokemon(params);
  } else if (
    request.url.split('/')[4] === 'remove' &&
    request.method === 'DELETE'
  ) {
    deletePokemon(params);
  }
});

server.listen(PORT, () => console.log('\n"Server is listening on port 8080"'));
q;
