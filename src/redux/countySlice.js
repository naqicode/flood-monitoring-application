import { createSlice } from "@reduxjs/toolkit"; //imports create slice

//Create slice is created and set to a new var 'countySlice'
//The createSlice function accepts a slice name, an initial state, and a action reducer -
// - with action creators to respond to action state 
//it automatically generates action creators and action types - 
// - that responds to the reducers and state
// The const 'countySlice' is assinged the value returned by 'createSlice' function
const countySlice = createSlice({
  name: "county list", //The name of the slice
  initialState: { //intial state of the slice, which is an object with single property 'countyList'  set to empty array
    countyList: [],

  },
  reducers: { //action reducers - An object that defines the action that can be performed on the state of the slice
    //action creator called 'addCounties' which is a function
    //The type property 'state' - describes the action
    //The payload property contains the data necessary to update the state
    addCounties(state, action) {
      state.countyList = action.payload; //The payload is an array of counties and the action updates the countyList
    },

  },
});

// Takes entire 'state' as an input - and returns the county from countyListReducer
export const selectorCountyListNew = (state) => state.countyListReducer.county

// Exports action creator function 'addCounties' from the 'countySlice' slice.
export const {addCounties} = countySlice.actions

// Exports the reducer function from the 'countySlice' slice. which is responsible -
// - for handling actions and updating the 'state'.
export default countySlice.reducer