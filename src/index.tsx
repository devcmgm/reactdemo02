import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import reduxStore from './redux/store'
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}
//let csrfToken = cookie.load('XSRF-TOKEN');
//let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});


// Redux Dev Tools
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

const root = document.getElementById("root");
if (root instanceof HTMLDivElement) {
    const store = reduxStore;
    // const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
    serviceWorker.register();
}

export default App;