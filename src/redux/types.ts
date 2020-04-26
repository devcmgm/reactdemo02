
import {User} from "../models/User";
import {Action} from 'redux'

export interface InitializeUserAction extends Action {
    type: 'INITIALIZE_USER';
    payload: User;
}

export interface AddFeedbackSuccessAction extends Action {
    type: 'ADD_FEEDBACK_SUCCESS';
    payload: string;
}

export interface AddFeedbackOfflineAction extends Action {
    type: 'ADD_FEEDBACK_OFFLINE';
    payload: string;
    meta: {
        offline: any;
    };
}

export interface LogoutAction extends Action {
    type: 'USER_LOGOUT';
    payload: boolean;
}

export interface GetAuthenticatedUserSuccessAction extends Action {
    type: 'GET_AUTHENTICATED_USER_SUCCESS';
    payload: User;
}


/* TODO find an alternative to types, so we can put the constant.ts values here */
export interface AsyncFailureAction extends Action {
    type:
        'GET_AUTHENTICATED_USER_FAILURE' | 'ADD_FEEDBACK_FAILURE'
    payload: string;
}
