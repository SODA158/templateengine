import { createSlice } from "@reduxjs/toolkit";

const workstringsSlice = createSlice({
  name: "workstrings",
  initialState: {
    list: [],
    enableArea: null,
    count: null,
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    setShowElement: (state, action) => {
      state.enableArea = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  
});

export const { setData,setShowElement,setCount, increment, decrement } = workstringsSlice.actions;
export default workstringsSlice.reducer;
