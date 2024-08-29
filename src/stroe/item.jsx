import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        fa: (state, action) => {
            state.item = action.payload;
            console.log(state.item);
        },
    },
});

export const { fa } = itemSlice.actions;
export default itemSlice.reducer;
