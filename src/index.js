import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {StyledEngineProvider} from '@mui/material/styles';
import {Provider} from 'react-redux'
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <Provider store={store}>
                    <App/>
                </Provider>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);