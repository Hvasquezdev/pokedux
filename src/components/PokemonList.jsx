import React from "react";
import { useDispatch } from "react-redux";
import { togglePokemonFavourite } from "../redux/actions";
import "./../assets/styles/PokemonList.css";

import PokemonCard from "./PokemonCard";

function PokemonList({ list }) {
  const dispatch = useDispatch();

  return (
    <div className="pokemon-list">
      {list.map((pokemon, key) => (
        <PokemonCard
          pokemon={pokemon}
          key={`${key}-${pokemon.name}`}
          onClickStarButton={() => dispatch(togglePokemonFavourite(key))}
        />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  list: Array(10).fill(""),
};

export default PokemonList;
