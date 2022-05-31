import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export type LangType = "Eng" | "Chi" | "Mon";
export type CurrencyType = "TRY" | "TWD" | "USD" | "ZAR";

const initialState = {
    burgerMenu: false,
    switcher: false,
    lang: "Eng" as LangType,
    currency: "USD" as CurrencyType
}

export type InitialStateType = typeof initialState

export const appSlice = createSlice({
    name: "app",
    initialState: initialState as InitialStateType,
    reducers: {
        setBurgerMenu: (state, action: PayloadAction<boolean>) => {
            state.burgerMenu = action.payload;
        },
        setSwitcher: (state, action: PayloadAction<boolean>) => {
            state.switcher = action.payload;
        },
        setLang: (state, action: PayloadAction<LangType>) => {
            state.lang = action.payload;
        },
        setCurrency: (state, action: PayloadAction<CurrencyType>) => {
            state.currency = action.payload;
        },
    }
})

export const {
    setBurgerMenu,
    setSwitcher,
    setLang,
    setCurrency
} = appSlice.actions

export const selectBurgerMenu = (state: RootState) => state.app.burgerMenu;
export const selectSwitcher = (state: RootState) => state.app.switcher;
export const selectLang = (state: RootState) => state.app.lang;
export const selectCurrency = (state: RootState) => state.app.currency;

export const appReducer = appSlice.reducer