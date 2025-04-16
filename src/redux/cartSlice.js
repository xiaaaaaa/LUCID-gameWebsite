import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { cartItems: [] };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (!!product) {
         const cartItems = state.cartItems.map((x) =>
            x.id === product.id ? item : x
         );
         state.cartItems = cartItems;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },

    reduceCartItems: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((x) => x.id === itemId);
      
      if (item) {
        if (item.qty > 1) {
          // 如果數量大於1，減少1
          state.cartItems = state.cartItems.map((x) =>
            x.id === itemId ? { ...x, qty: x.qty - 1 } : x
          );
        } else {
          // 如果數量為1，移除整個項目
          state.cartItems = state.cartItems.filter((x) => x.id !== itemId);
        }
      }
    },
  },
});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;

// export actions to global
export const { addCartItems, reduceCartItems } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;
