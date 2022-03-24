import React from 'react';
import PokemonInfo from './PokemonInfo';

import { get } from '../api';

const PokemonList = () => {
  const [pokemons, setPokemon] = React.useState([]);

  React.useEffect(() => {
    get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then((json) => {
      setPokemon(json.results);
    });
  }, []);

  return (
    <div className='pokemon-list-container'>
      {pokemons.map((pokemon) => (
        <PokemonInfo key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
