
import {Action, AnyAction} from 'redux';

import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {SnackAction} from "../reducers/snackReducer";

const _handleSnack = (data: SnackAction): any => ({
    type: 'SNACKBAR_CHANGE',
    payload: data
});

const _sendSnackSuccess = (data: any): any => ({
    type: 'SNACKBAR_SUCCESS',
    payload: data
});

const _sendSnackError = (data: any): any => ({
    type: 'SNACKBAR_ERROR',
    payload: data
});

const _sendSnackInfo = (data: any): any => ({
    type: 'SNACKBAR_INFO',
    payload: data
});

const _sendSnackWarning = (data: any): any => ({
    type: 'SNACKBAR_WARNING',
    payload: data
});

const _sendSnackClose = (data: any): any => ({
    type: 'SNACKBAR_CLOSE',
    payload: data
});

export const dispatchSnackTypes = {
    _sendSnackSuccess,
    _sendSnackInfo,
    _sendSnackWarning,
    _sendSnackError,
    _sendSnackClose,
    _handleSnack
};


export const handleSnack = (data: SnackAction) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_handleSnack(data));
    }
};

export const sendSnackSuccess = (data: SnackAction) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_handleSnack(data));
    }
};

export const closeSnack = (data: SnackAction) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_sendSnackClose(data));
    }
};

export const dispatchSnackActions = {
    handleSnack,
    closeSnack
};


