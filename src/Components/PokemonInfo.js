import React from "react"

const PokemonInfo = (props) => {
    
    const [PokemonInfo, setPokemon] = React.useState(null);

    React.useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/'+ props.name)
      .then((response)  => response.json())
      .then((json)  =>   setPokemon(json)); 
    
    }, [props.name]) 

  return (
    <div>
        {PokemonInfo && (
            <div>
                <h1>{props.name}</h1>
                <img src={PokemonInfo.sprites.front_default} alt={props.name} />
                <p>{PokemonInfo.types[0].type.name}</p>
            </div>
        )}    
    </div>
  )
}

export default PokemonInfo