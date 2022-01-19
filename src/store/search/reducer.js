import {createSlice} from "@reduxjs/toolkit";
import {search} from "./actions";

const initialState = {
    page: 1,
    data: [],
    errors: [],
    pageLimit: 5,
    totalItems: 0,
    isFocus: false,
    isLoading: false
};

export const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        focus(state, action) {
            state.isFocus = action.payload
        },
        clear(state) {
            state.data = []
        }
    },
    extraReducers: (builder => {
        builder.addCase(search.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(search.fulfilled, (state, action) => {
            state.error = []
            state.isLoading = false
            state.data = action.payload ? action.payload.data : []
        })
        builder.addCase(search.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload;
        })
    })
})