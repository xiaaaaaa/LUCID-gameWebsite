import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { userLovePic: [ {id:'1'}, {id:'3'}, {id:'7'} ] };
const userHeartSlice = createSlice({
  name: 'userHeart',
  initialState,
  reducers: {
    addUserHeart: (state, action) => {
      const item = action.payload;
      const product = state.userLovePic.find((x) => x.id === item.id);
      if (!!product) {
         const userLovePic = state.userLovePic.map((x) =>
            x.id === product.id ? item : x
         );
         state.userLovePic = userLovePic;
      } else {
        state.userLovePic = [...state.userLovePic, item];
      }
    },

    reduceCUserHeart: (state, action) => {
      const itemId = action.payload;
      const item = state.userLovePic.find((x) => x.id === itemId);
      
      if (item) {
        state.userLovePic = state.userLovePic.filter((x) => x.id !== itemId);
      }
    },
  },
});

// export state to global
export const selectCartItems = (state) => state.userHeart.userLovePic;

// export actions to global
export const { addUserHeart, reduceCUserHeart } = userHeartSlice.actions;

// export reducer to global
export default userHeartSlice.reducer;