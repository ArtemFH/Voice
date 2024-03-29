import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from "./users/reducer";
import {searchReducer} from "./search/reducer";

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
        search: searchReducer.reducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

