import './styles/App.scss';
import PokemonList from './components/PokemonList';
import PokemonPicture from  './components/PokemonPicture';
import SelectedPokemon from  './components/SelectedPokemon';
import PokemonDetails from  './components/PokemonDetails';

function App() {
  return (
    <div>
      <h1 className="text"> Pokedex </h1>
      <PokemonList />
      <SelectedPokemon />
      <PokemonPicture />
      <PokemonDetails />
    </div>

  );
}

export default App;
