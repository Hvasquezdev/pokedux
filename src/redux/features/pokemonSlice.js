import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      const { list } = action.payload;
      state.list = list;
      console.log("si", action.payload);
    },

    setLoadingPokemonList: (state, action) => {
      const { isLoading } = action.payload;
      state.loading = isLoading;
    },

    togglePokemonFavourite: (state, action) => {
      const { index } = action.payload;
      const pokemon = state.list[index];

      console.log(index, pokemon, "ADSASD");

      state.list[index] = {
        ...pokemon,
        isFavourite: !pokemon.isFavourite,
      };
    },
  },
});

export const { setPokemonList, setLoadingPokemonList, togglePokemonFavourite } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;