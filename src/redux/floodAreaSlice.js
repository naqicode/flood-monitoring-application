// Import createSlice function from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// The floodAreaSlice is assigned the return value of createSlice() function
// THe createSlice() function consists of slice name, the intiial state and action reducers.
const floodAreaSlice = createSlice({
  name: "floodArea", // The name of the slice
  // Initial state of the slice which is an object with 2 properties.
  // The properties are set to empty array
  initialState: {
    county: [],
    floodWarning: [],
  },
  // Action reducers - defines actions that can be performed on the state of slice
  reducers: {
    // 'addCounty' action creator
    // 'addFloodWarning' action crrator
    // the 'state' param describes the state and action describes the action
    addCounty(state, action) {
      state.county = action.payload; // The result of action.payload is set to state.county
    },
    addFloodWarning (state, action) 
    {
        state.currentSelectedCounty = action.payload
    }
  },
});

// Takes entire 'state' as an input - and returns the county from floodAreaReducer
export const selectorCountyList = (state) => state.floodAreaReducer.county

// Takes entire 'state' as an input - and returns the floodWarning from floodAreaReducer
export const selectorFloodWarning = (state) => state.floodAreaReducer.floodWarning

// Exports action creator function 'addCounties' and 'addFloodWarning' from the 'floodAreaSlice' slice.
export const {addCounty, addFloodWarning} = floodAreaSlice.actions

// Exports the reducer function from the 'floodAreaSlice' slice. which is responsible -
// - for handling actions and updating the 'state'.
export default floodAreaSlice.reducer