import {createSlice} from "@reduxjs/toolkit";
import {login} from "./actions";

const initState = {
    user: null,
    loading: false,
    errors: []
};

export const userReducer = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(login.rejected, (state) => {
            state.loading = 'idle'
            state.errors = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.errors = false;
        })
        builder.addCase(login.pending, (state) => {
            state.loading = 'pending';
            state.errors = false;
        })
    })
})