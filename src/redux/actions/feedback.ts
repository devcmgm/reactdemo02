import {ADD_FEEDBACK, ADD_FEEDBACK_FAILURE, ADD_FEEDBACK_OFFLINE, ADD_FEEDBACK_SUCCESS} from "../constants";
import {AddFeedbackOfflineAction, AddFeedbackSuccessAction, AsyncFailureAction} from "../types";
import {baseURI} from "../../global";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import FeedbackService from "../services/FeedbackService";
import {dispatchSnackTypes} from "./snack";

const _addFeedback = () => ({type: ADD_FEEDBACK});

const _addFeedbackSuccess = (message: string): AddFeedbackSuccessAction => ({
    type: ADD_FEEDBACK_SUCCESS,
    payload: message
});

const _addFeedbackFailure = (error: string): AsyncFailureAction => ({
    type: ADD_FEEDBACK_FAILURE,
    payload: error
});

const _addFeedbackOffline = (message: string): AddFeedbackOfflineAction => ({
    type: ADD_FEEDBACK_OFFLINE,
    payload: message,
    meta: {
        offline: {
            // action to dispatch when effect succeeds:
            // TODO: Get POST working with AJAX call back when online ...
            effect: { url: `${baseURI}/feedback/add`,
                method: 'POST',
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                    "warloc-offline": "true"
                },
                payload: message,
                data: JSON.stringify( {message} )
            },
            commit: {type: 'SEND_FEEDBACK_OFFLINE', meta: {message}},
            // action to dispatch if network action fails permanently:
            rollback: {type: 'ADD_FEEDBACK_FAILURE', meta: {error: message}}
        }
    }
})


export const addFeedback = ({ message }: {
    message: string;
}): ThunkAction<Promise<any | AsyncFailureAction>, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(_addFeedback);
        return FeedbackService.addFeedback({message})
            .then((response: number) => {
                switch (response){
                    case (200):
                        dispatch(_addFeedbackSuccess(message));
                        dispatch(dispatchSnackTypes._handleSnack({
                            snackbarMessage:"Feedback was sent successfully!",
                            snackbarOpen: true,
                            snackbarSeverity: "success"}))
                        return;
                    case (0):
                        dispatch(_addFeedbackOffline(message));
                        dispatch(dispatchSnackTypes._handleSnack({
                            snackbarMessage:"Warning: You are offline. This feedback will be sent when you go back online!",
                            snackbarOpen: true,
                            snackbarSeverity: "warning"}))
                        return;
                    default:
                        dispatch(dispatchSnackTypes._handleSnack({
                            snackbarMessage:"Uh Oh! There seems to be a problem with sending feedback! (500 Response Code)",
                            snackbarOpen: true,
                            snackbarSeverity: "error"}))
                        return;

                }
            })
            .catch(error => {
                dispatch(_addFeedbackFailure(error))
            })
    }
}
