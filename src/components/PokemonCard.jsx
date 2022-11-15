import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";

function PokemonCard({ pokemon, onClickStarButton }) {
  return (
    <Card
      style={{ width: 250 }}
      title={pokemon.name}
      cover={<img src={pokemon.image} alt={pokemon.name} />}
      extra={
        <StarButton
          isFilled={pokemon.isFavourite}
          onClick={onClickStarButton}
        />
      }
    >
      <Meta
        description={pokemon.typesStr}
        style={{ textTransform: "capitalize" }}
      />
    </Card>
  );
}

export default PokemonCard;
