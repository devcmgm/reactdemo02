import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import cookie from "react-cookies";
import App from './App';
import axios from "axios";
import rootReducer from "./redux/reducers/rootReducer";
import OfflineSync from "./component/OfflineSync";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}
let csrfToken = cookie.load('XSRF-TOKEN');

let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});
const middleware = [ thunk ]


const store = createStore(
    rootReducer,
    applyMiddleware(...middleware, logger)
)

render(
    <Provider store={store}>
        <OfflineSync/>
    </Provider>,
    document.getElementById('root')
)