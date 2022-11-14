import { SET_POKEMON_LIST } from "./actionTypes";

export const setPokemonList = (list) => ({
  type: SET_POKEMON_LIST,
  payload: {
    list,
  },
});
