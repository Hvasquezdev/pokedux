import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiPokemonService from "../../core/services/Pokemon.api.service";
import {
  setLoadingPokemonList,
  setPokemonList,
} from "../features/pokemonSlice";

const pokemonService = new ApiPokemonService();

export const getPokemonList = createAsyncThunk(
  "pokemon/getPokemonList",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingPokemonList({ isLoading: true }));

      const pokemonList = await pokemonService.getPokemonList({ limit: 151 });

      dispatch(setPokemonList({ list: pokemonList }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingPokemonList({ isLoading: false }));
    }
  }
);
