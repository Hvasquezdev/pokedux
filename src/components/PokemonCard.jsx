import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

function PokemonCard({ pokemon }) {
  return (
    <Card
      style={{ width: 250 }}
      title={pokemon.name}
      cover={
        <img src={pokemon.image} alt={pokemon.name} />
      }
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.typesStr} style={{ textTransform: "capitalize" }} />
    </Card>
  );
}

export default PokemonCard;
