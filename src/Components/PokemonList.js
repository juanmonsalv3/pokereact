import React from "react"
import PokemonInfo from "./PokemonInfo";

const PokemonList = () => { 

    const [pokemons, setPokemon] = React.useState([]);

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10') 
        .then((response)  => response.json())
        .then((json)  =>   setPokemon(json.results)); 
        }, [])

    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonInfo key={pokemon.name} name={pokemon.name}/> 
            ))}  
        </div>
    ) 
}

export default PokemonList 