import React from 'react';

const PokemonPicture = ({pokemon}) => {
  return (
    <div className='pokemon-picture-container'>
      <h1 className='pokemon-name-detail'>{pokemon.forms[0].name}</h1>
      <img className='pokemon-image-detail' src={pokemon.sprites.front_default} alt={pokemon.forms.name} />
    </div>
  );
};

export default PokemonPicture;
