// Importing 'configureStore' function from reduxjs toolkit
// 'configureStore' is a function used to create redux store
import { configureStore } from '@reduxjs/toolkit'

// Importing the slices from its respective files
import floodAreaSlice from './floodAreaSlice'
import countySlice from './countySlice'

// The value returned in 'configureStore' is set to var 'store'.
// The configureStore has an onject 'reducer' with 2 properties with 2 key-value pairs/
// 
 export const store = configureStore({ 
    reducer: {
        //key-value for the slice importing redux slices which contains the reducer logic
        floodAreaReducer: floodAreaSlice,
        countyListReducer: countySlice
    }
})

  