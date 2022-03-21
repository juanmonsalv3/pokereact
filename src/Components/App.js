import '../styles/App.scss';
import PokemonList from './PokemonList';
import SelectedPokemon from './SelectedPokemon';

function App() {
  return (
    <div className='app-container'>
      <div className='app-header'>
        <h1 className='title'> Pokedex </h1>
      </div>
      <SelectedPokemon />
      <PokemonList />
    </div>
  );
}

export default App;
