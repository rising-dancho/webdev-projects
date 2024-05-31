import { Router } from 'express';
import { getAllPokemons, addPokemon } from '../controller/pokemons.controllers.js';

const pokemonsRouter = Router();

pokemonsRouter.get('/', getAllPokemons);

pokemonsRouter.post('/', addPokemon);

export default pokemonsRouter;
