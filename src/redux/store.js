import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'; 
import colorReducer from './colorSlice';
import cartReducer from './cartSlice';
import getFlowerReducer from './getFlowerSlice';
import getUserHeartReducer from './userHeartSlice';

const colorPersistConfig = {
  key: "color",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const npcPersistConfig = {
  key: "npc",
  storage,
};

const userHeartPersistConfig = {
  key: "userHeart",
  storage,
};


const persistedColorReducer = persistReducer(colorPersistConfig, colorReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedNpcReducer = persistReducer(npcPersistConfig, getFlowerReducer);
const persisteduserHeartReducer = persistReducer(userHeartPersistConfig, getUserHeartReducer);

// Part2: Combine Reducers and Create a Store
export const store = configureStore({
   reducer: {
     color: persistedColorReducer,
     cart: persistedCartReducer,
     npc: persistedNpcReducer,
     userHeart: persisteduserHeartReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 });

//  export store to global
export const persistor = persistStore(store);