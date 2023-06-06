import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    busket: []
}

const busketSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        setBusket: (state, action) => {
            state.busket.push(action.payload)
        }
    }
})

export default busketSlice.reducer;
export const { setBusket } = busketSlice.actions;
export const busSelect = state => state.busketSlice;