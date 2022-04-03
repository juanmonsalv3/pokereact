import '../styles/App.scss';
import React from 'react';
import PokemonList from './PokemonList';
import SelectedPokemon from './SelectedPokemon';
import { PokemonContext } from '../Contexts/PokemonContext';
import { get } from '../api';

function App() {
  const [pokemons, setPokemon] = React.useState([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);

  React.useEffect(() => {
    get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then((json) => {
      setPokemon(json.results);
      setSelectedPokemon(json.results[0]);
    });
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemonList: pokemons, selectedPokemon: selectedPokemon, setSelectedPokemon }}
    >
      <div className='app-container'>
        <div className='app-header'>
          <h1 className='title'> Pokedex </h1>
        </div>
        <SelectedPokemon pokemonName={!!selectedPokemon ? selectedPokemon.name : null} />
        <PokemonList />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
