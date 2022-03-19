import React from "react"

const PokemonInfo = ({name, url}) => {
    
    const [PokemonInfo, setPokemon] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
      .then((response)  => response.json())
      .then((json)  =>   setPokemon(json)); 
    
    }, [name]) 

  return (
    <div>
        {PokemonInfo && (
            <div>
                <h1>{name}</h1>
                <img src={PokemonInfo.sprites.front_default} alt={name} />
                <p>{PokemonInfo.types[0].type.name}</p>
            </div>
        )}    
    </div>
  )
}

export default PokemonInfo