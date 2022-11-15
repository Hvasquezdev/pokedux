import ApiPokemonService from "../core/services/Pokemon.api.service";
import { SET_POKEMON_LIST } from "./actionTypes";

const pokemonService = new ApiPokemonService();

export const setPokemonList = (list) => ({
  type: SET_POKEMON_LIST,
  payload: {
    list,
  },
});

export const getPokemonList = () => async (dispatch) => {
  try {
    const pokemonList = await pokemonService.getPokemonList({ limit: 151 });
    dispatch(setPokemonList(pokemonList));
  } catch (error) {
    console.log(error);
  }
};
