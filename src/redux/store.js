import { configureStore } from '@reduxjs/toolkit'

import floodAreaSlice from './floodAreaSlice'
 export const store = configureStore({ 
    reducer: {

        floodAreaReducer: floodAreaSlice
    }
})

  