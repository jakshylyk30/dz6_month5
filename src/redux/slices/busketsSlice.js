import {createSlice} from "@reduxjs/toolkit";
import json from '../data.json'

const initialState = {
    buskets: json
}

const busketsSlice = createSlice({
    name: 'buskets',
    initialState,
    reducers: {}
})

export default busketsSlice.reducer;
export const busketSelect = state => state.busketsSlice;