import axios from "axios";

class ApiPokemonService {
  constructor() {
    this._baseUrl = "https://pokeapi.co/api/v2/";
  }

  async getPokemonDetails(url) {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  getPokemonThumb(pokemon) {
    const { sprites } = pokemon;
    const altImage = sprites["front_default"] || "";
    const image = sprites.other["official-artwork"]["front_default"] || "";

    return image || altImage;
  }

  async getParsedPokemonList(baseList) {
    const promises = baseList.map(async (pokemon) => {
      const response = await this.getPokemonDetails(pokemon.url);

      return {
        ...response,
        image: this.getPokemonThumb(response),
        typesStr: response.types.map(({ type }) => type.name).join(", "),
        isFavourite: false,
      };
    });
    return await Promise.all(promises);
  }

  async getPokemonList(params) {
    try {
      const { data } = await axios.get(`${this._baseUrl}pokemon`, {
        params,
      });
      const pokemonListWithDetails = await this.getParsedPokemonList(
        data.results
      );

      return pokemonListWithDetails;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ApiPokemonService;
