import { configureStore } from '@reduxjs/toolkit'

import floodAreaSlice from './floodAreaSlice'
import countySlice from './countySlice'
 export const store = configureStore({ 
    reducer: {

        floodAreaReducer: floodAreaSlice,
        countyListReducer: countySlice
    }
})

  