import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import cookie from "react-cookies";
import App from './App';
import axios from "axios";
import rootReducer from "./redux/reducers/rootReducer";
import OfflineSync from "./component/OfflineSync";
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}
let csrfToken = cookie.load('XSRF-TOKEN');

let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});
const middleware = [ thunk ]

interface Props {
    selectedSubreddit: string,
    posts: [],
    isFetching: boolean,
    lastUpdated: number,
    dispatch: any
}

export interface StoreData {
    data: string;
}

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware, logger),
        offline(offlineConfig)
    )
);

render(
    <Provider store={store}>
        <OfflineSync />
        <App/>
    </Provider>,
    document.getElementById('root')
)