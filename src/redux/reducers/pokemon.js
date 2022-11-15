import {
  SET_LOADING_POKEMON_LIST,
  SET_POKEMON_LIST,
  TOGGLE_POKEMON_FAVOURITE,
} from "../actionTypes";

const initialState = {
  list: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON_LIST:
      const { list } = action.payload;

      return {
        ...state,
        list: [...list],
      };

    case SET_LOADING_POKEMON_LIST:
      const { isLoading } = action.payload;

      return {
        ...state,
        loading: isLoading,
      };

    case TOGGLE_POKEMON_FAVOURITE:
      const { index } = action.payload;
      const pokemonList = [...state.list];
      const pokemon = pokemonList[index];

      pokemonList[index] = {
        ...pokemon,
        isFavourite: !pokemon.isFavourite,
      };

      return {
        ...state,
        list: [...pokemonList],
      };

    default:
      return state;
  }
}
