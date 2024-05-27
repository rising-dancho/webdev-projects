const fs = require('fs');

function getPokemons({ response }) {
  fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    const statusCode = 200;
    response.writeHead(statusCode, { 'Content-Type': 'application/json' });
    return response.end(data);
  });
}

function addPokemon({ pokemons, request, response }) {
  request.on('data', (chunk) => {
    // console.log(JSON.parse(chunk));
    const newPokemon = JSON.parse(chunk);
    // console.log(pokemons);
    pokemons.push(newPokemon);
    console.log(pokemons);

    fs.writeFileSync('./data.json', JSON.stringify(pokemons));
    // status code: 201 : created file
    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(newPokemon));
  });
}

function patchPokemon({ pokemons, request, response }) {
  const pokemonToEdit = pokemons.find((pokemon) => {
    return request.url.split('/')[5] === pokemon.name.toLowerCase();
  });
  request.on('data', (chunk) => {
    // console.log(JSON.parse(chunk));
    const requestBody = JSON.parse(chunk);
    for (let key in requestBody) {
      if (requestBody.hasOwnProperty(key)) {
        pokemonToEdit[key] = requestBody[key];
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(pokemons));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(pokemonToEdit));
  });
}

function deletePokemon({ pokemons, request, response }) {
  const updatedPokemons = pokemons.filter(
    (pokemon) => request.url.split('/')[5] !== pokemon.name.toLowerCase()
  );

  fs.writeFileSync('./data.json', JSON.stringify(updatedPokemons));
  response.writeHead(204, { 'Content-Type': 'application/json' });
  response.end();
}

module.exports = {
  getPokemons,
  addPokemon,
  patchPokemon,
  deletePokemon,
};
