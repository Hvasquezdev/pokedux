import "./App.css";

import { Col, Input } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./assets/images/svg/logo.svg";

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10} className="app-head">
        <img src={logo} alt="Pokedux" />
      </Col>

      <Col span={8} offset={8}>
        <Input.Search placeholder="Buscar..." />
      </Col>

      <PokemonList />
    </div>
  );
}

export default App;
