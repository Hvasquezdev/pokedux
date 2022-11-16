import { combineReducers } from "redux";
import pokemon from "./pokemon";
import pokemonSlice from "../features/pokemonSlice";

export default combineReducers({ pokemon: pokemonSlice });
