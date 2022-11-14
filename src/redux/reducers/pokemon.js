import { SET_POKEMON_LIST } from "../actionTypes";

const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON_LIST:
      const { list } = action.payload;

      return {
        ...state,
        list: [...list],
      };

    default:
      return state;
  }
}
