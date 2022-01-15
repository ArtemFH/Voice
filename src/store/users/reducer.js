import {createSlice} from "@reduxjs/toolkit";
import {login} from "./actions";

const initState = {
    user: null,
    loading: false,
    errors: false
};

export const userReducer = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(login.rejected, (state) => {
            state.loading = false
            state.errors = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.errors = false;
        })
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.errors = false;
        })
    })
})