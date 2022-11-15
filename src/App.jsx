import React, { useEffect } from "react";
import "./App.css";

import { Col, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "./redux/actions";
import PokemonList from "./components/PokemonList";
import logo from "./assets/images/svg/logo.svg";

function App() {
  const pokemonList = useSelector((state) => state.pokemon.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} className="app-head">
        <img src={logo} alt="Pokedux" />
      </Col>

      <Col span={8} offset={8}>
        <Input.Search placeholder="Buscar..." />
      </Col>

      <PokemonList list={pokemonList} />
    </div>
  );
}

export default App;
