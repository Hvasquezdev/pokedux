import axios from "axios";

class ApiPokemonService {
  constructor() {
    this._baseUrl = "https://pokeapi.co/api/v2/";
  }

  async getPokemonList(params) {
    try {
      const { data } = await axios.get(`${this._baseUrl}pokemon`, {
        params,
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ApiPokemonService;
