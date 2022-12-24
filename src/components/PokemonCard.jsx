import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import './PokemonList.css'
import StarButton from './StarButton'
import { setFavorite } from '../actions'
import { useDispatch } from 'react-redux'

const PokemonCard = ({name, image, types, id, favorite}) => {

  // console.log(name, types);

  const dispatch = useDispatch();
  const typeString = types.map(elem => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return (
  <Card 
    title={name}
    style={{width: 250}}
    cover={<img src={image}
    alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={() => handleOnFavorite()} />}
    >
    <Meta description={typeString} />
  </Card>);
}

export default PokemonCard