import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {store} from "./store/store";
import GlobalStyles from "./globalStyles";
import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider} from "@mui/material/styles";

ReactDOM.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <App/>
                <GlobalStyles/>
            </Provider>
        </StyledEngineProvider>
    </BrowserRouter>,
    document.getElementById('root')
);