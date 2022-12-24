import React from 'react'
import PokemonCard from "./PokemonCard";
import './PokemonList.css'
import { useSelector } from 'react-redux';

export const PokemonList = ({pokemons}) => {
  
  // const data = useSelector((state) => state.data);
  // console.log(pokemons);
  return (
    <div className='PokemonList'>
        {pokemons.length > 0 && pokemons.map((pokemon) => {
            return <PokemonCard 
              name={pokemon.name} 
              key={pokemon.name} 
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              id={pokemon.id}
              favorite={pokemon.favorite} />
        })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
