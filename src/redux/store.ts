import { configureStore } from '@reduxjs/toolkit'
import menu from './mobileMenu/slice'

export const store = configureStore({
  reducer: {
    menu,
  },
})

export type RootState = ReturnType<typeof store.getState>
