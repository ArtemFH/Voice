import {createAsyncThunk} from "@reduxjs/toolkit";
import userApi from "../../api/requests/users"

export const login = createAsyncThunk('login',
    async ({email, password}, {rejectWithValue}) => {
        const response = await userApi.login(email, password)
        if (!response.data.token) return rejectWithValue(response.data)
        return response.data
    })