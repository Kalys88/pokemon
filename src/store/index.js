import {configureStore} from '@reduxjs/toolkit';
import pokemon from './pokemon';

const store = configureStore({
  reducer: {pokemon}
})

export default store;