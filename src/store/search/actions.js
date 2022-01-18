import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import searchApi from "../../api/requests/search"

export const search = createAsyncThunk('search/search',
    async ({letter}) => {
        if (letter) {
            const response = await searchApi.search(letter)
            return response.data
        } else {
            return []
        }
    })

