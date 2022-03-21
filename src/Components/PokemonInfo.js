import React from "react"

const PokemonInfo = ({name, url}) => {
    
    const [pokemonInfo, setPokemon] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
      .then((response)  => response.json())
      .then((json)  =>   setPokemon(json)); 
    
    }, [name, url]) 

  return (
    <div>
        {pokemonInfo && (
            <div>
                <h1>{name}</h1>
                <img src={pokemonInfo.sprites.front_default} alt={name} />
                <p>{pokemonInfo.types[0].type.name}</p>
            </div>
        )}    
    </div>
  )
}

export default PokemonInfo