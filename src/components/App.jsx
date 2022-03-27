import '../styles/App.scss';
import PokemonList from './PokemonList';
import SelectedPokemon from './SelectedPokemon';
import { PokemonContext } from '../Contexts/PokemonContext';
import React from 'react';

function App() {

  const [pokemonInfo, setPokemonInfo] = React.useState(null);

  return (
    <PokemonContext.Provider value={{pokemonInfo, setPokemonInfo}}>
      <div className='app-container'>
        <div className='app-header'>
          <h1 className='title'> Pokedex </h1>
        </div>
        <SelectedPokemon />
        <PokemonList />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
