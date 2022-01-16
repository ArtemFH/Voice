import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import userApi from "../../api/requests/users"

export const login = createAsyncThunk('user/login',
    async ({email, password}, {rejectWithValue}) => {
        const response = await userApi.login(email, password)
        if (!response.data.token) return rejectWithValue(response.data)
        return response.data
    })

export const me = createAsyncThunk('user/me',
    async ({token}) => {
        const response = await userApi.me(token)
        return response.data
    })