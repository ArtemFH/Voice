import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from "./users/reducer";

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

