import { createSlice } from '@reduxjs/toolkit';

const initialState = { getFlowerList: [] };
const getFlowerList = createSlice({
  name: 'npc',
  initialState,
  reducers: {
    addGetFlowerLists: (state, action) => {
      state.getFlowerList.push(action.payload);
    },
  },
});



// export state to global
export const selectGetFlowerPeople = (state) => state.npc.getFlowerList;

// export actions to global
export const { addGetFlowerLists } = getFlowerList.actions;

// export reducer to global
export default getFlowerList.reducer;
