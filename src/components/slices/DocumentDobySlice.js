import { createSlice } from "@reduxjs/toolkit";
import { worksApi } from "../reduxApi/WorksApi";

const workstringsSlice = createSlice({
  name: "workstrings",
  initialState: {
    list: [],
    enable: {},
    count: null,
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    setShowElement: (state, action) => {
      state.enable = action.payload;
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
  extraReducers: (build) => {
    build
          .addMatcher(worksApi.endpoints.getWorkStrings.matchPending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addMatcher(worksApi.endpoints.getWorkStrings.matchFulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
        state.enable=action.payload[0];
      })
      .addMatcher(worksApi.endpoints.getWorkStrings.matchRejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setData, setShowElement, setCount, increment, decrement } =
  workstringsSlice.actions;
export default workstringsSlice.reducer;
