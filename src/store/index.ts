import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../slices/movieSlice'
import authSlice from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    movie:movieSlice,
    auth:authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch