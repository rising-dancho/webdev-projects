import { Router } from 'express';
import {
  getAllPokemons,
  addPokemon,
  editPokemon,
  deletePokemon,
} from '../controller/pokemons.controllers.js';

const pokemonsRouter = Router();

pokemonsRouter.get('/', getAllPokemons);

pokemonsRouter.post('/', addPokemon);

pokemonsRouter.patch('/:name', editPokemon);

pokemonsRouter.delete('/:name', deletePokemon);

export default pokemonsRouter;
