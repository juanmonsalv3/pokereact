import React, { useContext, useState } from 'react';
import { get } from '../api';
import { PokemonContext } from '../Contexts/PokemonContext';

const PokemonInfo = ({ name, url }) => {
  const context = useContext(PokemonContext);

  const [pokemonInfo, setPokemonInfo] = useState(null);

  React.useEffect(() => {
    get(url).then((json) => setPokemonInfo(json));
  }, [name, url, setPokemonInfo]);

  if (!pokemonInfo) return null;

  const number = 3 - pokemonInfo.id.toString().length;
  const id = '0'.repeat(number) + pokemonInfo.id.toString();

  return (
    <div
      className='pokemon-info-container'
      onClick={context.setSelectedPokemon.bind(null, pokemonInfo)}
    >
      {pokemonInfo && (
        <div>
          <img
            className='pokemon-image'
            src={pokemonInfo.sprites.front_default}
            alt={name}
          />
          <p className='pokemon-name'>#{id + ' ' + name}</p>
          <ul className='pokemon-types'>
            {pokemonInfo.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
