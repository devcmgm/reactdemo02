import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from "./reducers/rootReducer";
import {offline} from '@redux-offline/redux-offline';
import defaultQueue from '@redux-offline/redux-offline/lib/defaults/queue';
import cookie from "react-cookies";
import axios from "axios";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import thunk from "redux-thunk";
import {offlineReducer} from "./reducers/offlineReducer";


let csrfToken = cookie.load('XSRF-TOKEN');
let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});

// Custom Effect
const effect = (effect: any, _action: any) => instance(effect);

// Custom Discard
const discard = (error: any, _action: any, _retries: any) => {
    const { request, response } = error;
    if (!request) throw error; // There was an error creating the request
    if (!response) return false; // There was no response
    return 400 <= response.status && response.status < 500;
};

const getMethod = action => action.meta.offline.effect.method || "GET";
const getUrl = action => action.meta.offline.effect.url;

// Custom Config
const customReduxOfflineConfig = {
    ...offlineConfig,
    effect,
    discard,
    queue: {
        ...defaultQueue,
        enqueue(array, action, context) {
            return offlineReducer(array, action, context);
        },
        peek(outbox, action, { offline }) {
            if (store.getState().commonDetails.pauseQueue) return false;
            return outbox[0];
        },
    }

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
        offline(customReduxOfflineConfig)
    )
);

export default store;
