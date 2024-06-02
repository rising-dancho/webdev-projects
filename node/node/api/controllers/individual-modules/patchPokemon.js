const fs = require('fs');

function patchPokemon({ pokemons, request, response }) {
  const pokemonToEdit = pokemons.find((pokemon) => {
    return request.url.split('/')[5] === pokemon.name.toLowerCase();
  });
  request.on('data', (chunk) => {
    // console.log(JSON.parse(chunk));
    const requestBody = JSON.parse(chunk);
    for (let key in requestBody) {
      pokemonToEdit[key] = requestBody[key];
    }
    fs.writeFileSync('./data.json', JSON.stringify(pokemons));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(pokemonToEdit));
  });
}

module.exports = patchPokemon;
