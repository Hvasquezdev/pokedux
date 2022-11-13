import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

function PokemonCard() {
  return (
    <Card
      style={{ width: 250 }}
      title="Ditto"
      cover={
        <img src="https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/thumbnail/1200x900/quality/100/pokemon_go_ditto_disguises_A16ilOs.png" />
      }
      extra={<StarOutlined />}
    >
      <Meta description="Normal" />
    </Card>
  );
}

export default PokemonCard;
