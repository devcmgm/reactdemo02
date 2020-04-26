import {User} from "../../models/User";
import {AsyncFailureAction, GetAuthenticatedUserSuccessAction, InitializeUserAction} from "../types";
import {Action, AnyAction} from 'redux';
import {
    GET_AUTHENTICATED_USER,
    GET_AUTHENTICATED_USER_FAILURE,
    GET_AUTHENTICATED_USER_SUCCESS,
    INITIALIZE_USER, USER_LOGOUT
} from "../constants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import UserService from "../services/UserService";

export const initializeUser = (user: User): InitializeUserAction => ({
    type: INITIALIZE_USER,
    payload: user
});

const _userLogout = (): Action => ({
    type: USER_LOGOUT
});
const _logoutSuccess = (): Action => ({
    type: 'LOGOUT_SUCCESS'
});

const _logoutError = (): Action => ({
    type: 'LOGOUT_ERROR'
});

const _getAuthenticatedUser = (): Action => ({
    type: GET_AUTHENTICATED_USER
});

const _getAuthenticatedUserSuccess = (user: User): GetAuthenticatedUserSuccessAction => ({
    type: GET_AUTHENTICATED_USER_SUCCESS,
    payload: user
});

const _getAuthenticatedUserFailure = (error: string): AsyncFailureAction => ({
    type: GET_AUTHENTICATED_USER_FAILURE,
    payload: error
});

export const getAuthenticatedUser = (): ThunkAction<Promise<AnyAction | AsyncFailureAction>, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_getAuthenticatedUser());
        return UserService.getAuthenticatedUser()
            .then((response: User) => dispatch(_getAuthenticatedUserSuccess(response)))
            .catch(error => dispatch(_getAuthenticatedUserFailure(error)))
    }
};


export const userLogout = (): ThunkAction<Promise<AnyAction | AsyncFailureAction>, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_userLogout());
        return UserService.logoutUser()
            .then((response: boolean) => dispatch(_logoutSuccess))
            .catch(error => dispatch(_logoutError))
    }
};
