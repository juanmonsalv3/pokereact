import React from 'react';
import PokemonDetails from './PokemonDetails';
import PokemonPicture from './PokemonPicture';

const SelectedPokemon = ({ pokemonName = 'ditto' }) => {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, [pokemonName]);

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
