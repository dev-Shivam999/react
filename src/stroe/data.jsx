import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    api: [],
    fa:[]
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        lol: (state, action) => {
            state.api = action.payload;
        },
        f:(state, action) => {
            state.fa.push(action.payload);
          
        },
        r:(state, action) => {
            state.fa = state.fa.filter(state=>state.id!=action.payload);
        }
    },
});

export const { lol,f,r } = dataSlice.actions;
export default dataSlice.reducer;
