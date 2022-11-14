import React from "react";
import "./../assets/styles/PokemonList.css";

import PokemonCard from "./PokemonCard";

function PokemonList({ list }) {
  return (
    <div className="pokemon-list">
      {list.map((pokemon, key) => (
        <PokemonCard pokemon={pokemon} key={`${key}-${pokemon.name}`} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  list: Array(10).fill(""),
};

export default PokemonList;
