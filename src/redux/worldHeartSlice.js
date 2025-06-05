import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { worldLovePic: [ 
  {id:'1', getHeartQty:105}, 
  {id:'2', getHeartQty:111}, 
  {id:'3', getHeartQty:208}, 
  {id:'4', getHeartQty:92}, 
  {id:'5', getHeartQty:131}, 
  {id:'6', getHeartQty:87}, 
  {id:'7', getHeartQty:140}, 
  {id:'8', getHeartQty:72}, 
] };

const worldHeartSlice = createSlice({
  name: 'worldHeart',
  initialState,
  reducers: {
    addworldHeart: (state, action) => {
      const itemId = action.payload;
      const item = state.worldLovePic.find((x) => x.id === itemId);
      if (item) {
        state.worldLovePic = state.worldLovePic.map((x) =>
          x.id === itemId 
            ? { ...x, getHeartQty: x.getHeartQty + 1 }
            : x
        );
      }
    },

    reduceWorldHeart: (state, action) => {
      const itemId = action.payload;
      const item = state.worldLovePic.find((x) => x.id === itemId);
      
      if (item) {
        state.worldLovePic = state.worldLovePic.map((x) =>
          x.id === itemId 
            ? { ...x, getHeartQty: x.getHeartQty - 1 }
            : x
        );
      }
    },
  },
});

// export state to global
export const selectWorldHeart = (state) => state.worldHeart.worldLovePic;

// export actions to global
export const { addworldHeart, reduceWorldHeart } = worldHeartSlice.actions;

// export reducer to global
export default worldHeartSlice.reducer;