import React from 'react'

const SelectedPokemon = () => {

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
                <h1>{pokemon.forms[0].name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.forms.name} />
            </div>
        )} 
    </div>
  )
}

export default SelectedPokemon
