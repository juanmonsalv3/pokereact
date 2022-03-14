import React from "react"

const Pokemon = () => {

    const [pokemon, setPokemon] = React.useState(null);

    React.useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response)  => response.json())
      .then((json)  =>   setPokemon(json));
    
    }, [])
    

  return (
    <div>
        {pokemon && (
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>{pokemon.types[0].type.name}</p>
            </div>
        )}    
    </div>
  )
}

export default Pokemon