import {configureStore} from "@reduxjs/toolkit";
import busketsSlice from "./slices/busketsSlice.js";
import busketSlice from "./slices/busketSlice.js";
export const store = configureStore({
    reducer: {
        busketsSlice,
        busketSlice
    }
})
