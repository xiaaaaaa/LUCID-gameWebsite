import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import cartReducer from './cartSlice';
import getFlowerReducer from './getFlowerSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     color: colorReducer,
     cart: cartReducer,
     npc: getFlowerReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;