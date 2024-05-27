const fs = require('fs');

function deletePokemon({ pokemons, request, response }) {
  const updatedPokemons = pokemons.filter(
    (pokemon) => request.url.split('/')[5] !== pokemon.name.toLowerCase()
  );

  fs.writeFileSync('./data.json', JSON.stringify(updatedPokemons));
  response.writeHead(204, { 'Content-Type': 'application/json' });
  response.end();
}

module.exports = deletePokemon;
