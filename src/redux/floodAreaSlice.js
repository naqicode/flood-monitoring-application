import { createSlice } from "@reduxjs/toolkit";

const floodAreaSlice = createSlice({
  name: "floodArea",
  initialState: {
    county: [],
    floodWarning: [],
  },
  reducers: {
    addCounty(state, action) {
      state.county = action.payload;
    },
    addFloodWarning (state, action) 
    {
        state.currentSelectedCounty = action.payload
    }
  },
});


export const selectorCountyList = (state) => state.floodAreaReducer.county
export const selectorFloodWarning = (state) => state.floodAreaReducer.floodWarning

export const {addCounty, addFloodWarning} = floodAreaSlice.actions

export default floodAreaSlice.reducer