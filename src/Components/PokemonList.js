import React, {useContext} from "react";
import PokemonInfo from "./PokemonInfo";
import { PokemonContext } from "../Contexts/PokemonContext";

const PokemonList = () => { 

    const {pokemons, setPokemon} = useContext(PokemonContext);

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10') 
        .then((response)  => response.json())
        .then((json)  =>   setPokemon(json.results)); 
        }, [setPokemon])

    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonInfo key={pokemon.name} {...pokemon}/> 
            ))}  
        </div>
    ) 
}

export default PokemonList 