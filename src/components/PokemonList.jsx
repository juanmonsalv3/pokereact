import React, { useContext } from 'react';
import { PokemonContext } from '../Contexts/PokemonContext';
import PokemonInfo from './PokemonInfo';

const PokemonList = () => {
  const context = useContext(PokemonContext);
  const pokemons = context.pokemonList;

  return (
    <div className='pokemon-list-container'>
      {pokemons.map((pokemon) => (
        <PokemonInfo key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
