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

export const editPokemon = (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  const pokemonToEdit = pokemons.find((pokemon) => {
    return pokemon.name.toLowerCase() === request.params.name;
  });

  if (!pokemonToEdit) {
    response.status(404).send({ message: 'Pokemon not found.' });
  }

  for (let key in request.body) {
    pokemonToEdit[key] = request.body[key];
  }

  fs.writeFileSync('./data.json', JSON.stringify(pokemons));

  response.status(200).send({
    message: 'Pokemon has been updated',
    data: pokemonToEdit,
  });
};

export const deletePokemon = (request, response) => {
  const pokemons = JSON.parse(fs.readFileSync('./data.json'));
  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase() !== request.params.name;
  });

  fs.writeFileSync('./data.json', JSON.stringify(filteredPokemons));

  response.status(204).send();
};
