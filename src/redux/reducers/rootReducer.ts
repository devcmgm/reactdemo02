import {combineReducers} from 'redux';
import {userReducer} from "./userReducer";
import {snackReducer} from "./snackReducer";
import {commonDetails} from "./commonDetails";
import {offline} from "@redux-offline/redux-offline";

export const appReducer = combineReducers({
    user: userReducer,
    snackbar: snackReducer,
    commonDetails: commonDetails,
    offline: offline
});

export const rootReducer = (state: any, action: any) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
}
