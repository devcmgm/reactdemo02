import {combineReducers} from 'redux';
import {demoReducer} from "./demoReducer";

export const rootReducer = combineReducers({
    demoReducer: demoReducer
});