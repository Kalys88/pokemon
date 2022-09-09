import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./pokemon";
import pokemons from "./pokemons";

const store = configureStore({
  reducer: { pokemon, pokemons },
});

export default store;
