import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    value: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const fetchPokemons = createAsyncThunk(
  "users/fetchPokemons",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    const promises = data.results.map(async ({ name, url }) => {
      const res = await fetch(url);
      const pokemon = await res.json();
      return { name, imgSrc: pokemon?.sprites?.front_default };
    });

    const res = await Promise.all(promises);
    return res;
  }
);

export default pokemonsSlice.reducer;
