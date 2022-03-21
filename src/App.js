import './Sass/App.scss';
import PokemonList from './Components/PokemonList';

function App() {
  return (
    <div>
      <h1 className="text">
      Pokedex
      </h1>
      <PokemonList />
    </div>

  );
}

export default App;
