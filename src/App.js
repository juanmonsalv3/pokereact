import React from "react"
import './App.css';
import PokemonList from './Components/PokemonList';
import {PokemonContext} from './Contexts/PokemonContext'

function App() {

  const [pokemons, setPokemon] = React.useState([]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Pokedex
      </h1>
      <PokemonContext.Provider value={{ pokemons,  setPokemon}}>
          <PokemonList />
      </PokemonContext.Provider>      
    </div>

  );
}

export default App;
