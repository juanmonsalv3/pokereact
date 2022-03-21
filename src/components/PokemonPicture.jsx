import React from 'react';

const PokemonPicture = ({pokemon}) => {
  return (
    <div className='pokemon-picture'>
      <h1>{pokemon.forms[0].name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.forms.name} />
    </div>
  );
};

export default PokemonPicture;
