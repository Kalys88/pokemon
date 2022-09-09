import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    value: {},
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.value = action.payload;
      console.log("check", action.payload);
    });
  },
});

export const fetchPokemon = createAsyncThunk("users/fetchPokemon", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  const data = await response.json();
  return data;
});

export default pokemonSlice.reducer;
