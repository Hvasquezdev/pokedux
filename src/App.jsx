import "./App.css";
import { Col, Input } from "antd";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Input.Search placeholder="Buscar..." />
      </Col>

      <PokemonList />
    </div>
  );
}

export default App;
