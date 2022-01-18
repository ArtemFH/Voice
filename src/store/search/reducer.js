import {createSlice} from "@reduxjs/toolkit";
import {search} from "./actions";

const initialState = {
    data: [],
    errors: [],
    focus: false,
    loading: false
};

export const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        focus(state) {
            state.focus = true
        },
        unFocus(state) {
            state.focus = false
        }
    },
    extraReducers: (builder => {
        builder.addCase(search.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(search.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = []
        })
        builder.addCase(search.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload;
        })
    })
})