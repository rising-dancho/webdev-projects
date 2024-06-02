const fs = require('fs');

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

module.exports = {
  addPokemon,
};
// export a function (cjs): https://dev.to/lico/how-to-import-and-export-in-commonjs-and-es-modules-43m1
