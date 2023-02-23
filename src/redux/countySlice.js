import { createSlice } from "@reduxjs/toolkit";

const countySlice = createSlice({
  name: "county list",
  initialState: {
    countyList: [],

  },
  reducers: {
    addCounties(state, action) {
      state.countyList = action.payload;
    },

  },
});


export const selectorCountyListNew = (state) => state.countyListReducer.county


export const {addCounties} = countySlice.actions

export default countySlice.reducer