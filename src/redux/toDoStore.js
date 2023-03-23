import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './toDoReducer'

export const toDoStore = configureStore({
  reducer: {
    toDoer: toDoReducer
  },
})