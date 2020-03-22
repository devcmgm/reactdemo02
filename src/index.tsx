import React from 'react';
import ReactDOM from 'react-dom';
import cookie from "react-cookies";

import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";

import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import {createStore, applyMiddleware, compose} from 'redux';

import * as serviceWorker from "./serviceWorker";

import App from './App';
import axios from "axios";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

let csrfToken = cookie.load('XSRF-TOKEN');
let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});
const effect = (effect: any, _action: any) => instance(effect);
const discard = (error: any, _action: any, _retries: any) => {
    const { request, response } = error;
    if (!request) throw error; // There was an error creating the request
    if (!response) return false; // There was no response
    return 400 <= response.status && response.status < 500;
};

const root = document.getElementById("root");

if (root instanceof HTMLDivElement) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk), offline({
            ...offlineConfig,
            effect,
            discard
        }))
    );

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );

    serviceWorker.register();
}

export default App;
