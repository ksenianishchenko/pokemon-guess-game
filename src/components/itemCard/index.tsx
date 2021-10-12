import React from "react";
import { Link } from "react-router-dom";
import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";

type ComponentProps = {
  item: PokemonInfoItem
}

type Props = ComponentProps;

const ItemCard = (props:Props) => {

  const {item} = props;

  return <div className="item-card">
    <img src={item.image} alt={`Image of ${item.name}`} />
    <p>{item.name}</p>
    <Link to={`/pokemon/${item.id}`}>See more</Link>
  </div>
}

export default ItemCard;