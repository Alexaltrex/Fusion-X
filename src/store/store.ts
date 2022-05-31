import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from "./appSlice";

const isProduction = process.env.NODE_ENV === 'production';

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    devTools: !isProduction,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

