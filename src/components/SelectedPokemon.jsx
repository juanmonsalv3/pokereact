import React from 'react';
import { get } from '../api';
import PokemonDetails from './PokemonDetails';
import PokemonPicture from './PokemonPicture';

const SelectedPokemon = ({ pokemonName = 'ditto' }) => {
  console.log(pokemonName)
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((json) => setPokemon(json));
  }, [pokemonName, setPokemon]);

  return (
      <div className='selected-pokemon-container'>
        {pokemon && (
          <div>
            <PokemonPicture pokemon={pokemon} />
            <PokemonDetails pokemon={pokemon} />
          </div>
        )}
      </div>
  );
};

export default SelectedPokemon;
