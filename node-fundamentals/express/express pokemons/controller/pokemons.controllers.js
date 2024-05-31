import fs from 'fs';

export const getAllPokemons = (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  response.status(200);
  response.send({
    message: 'List of Pokemons',
    data: pokemons,
  });
};

export const addPokemon = (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  pokemons.push(request.body);

  fs.writeFileSync('./data.json', JSON.stringify(pokemons));

  response.status(201);
  response.send({
    message: 'New pokemon was added',
    data: request.body,
  });
};
