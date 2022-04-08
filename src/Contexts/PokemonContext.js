import { createContext } from 'react';

export const PokemonContext = createContext({
  pokemonList: [],
  selectedPokemon: null,
});
