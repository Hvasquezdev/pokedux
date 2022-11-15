import { SET_LOADING_POKEMON_LIST, SET_POKEMON_LIST } from "../actionTypes";

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

    default:
      return state;
  }
}
