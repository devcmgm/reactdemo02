export interface Snack {
    snackbarOpen: boolean;
    snackbarMessage: string;
    snackbarSeverity: "error"|"success"|"info"|"warning";
}

export interface SnackAction {
    snackbarOpen: boolean;
    snackbarMessage: string;
    snackbarSeverity: "error"|"success"|"info"|"warning";
}

export const snackReducer = (state: SnackAction = {snackbarOpen : false, snackbarSeverity: 'error', snackbarMessage: ''}, action: any) => {
    switch (action.type) {
        case "SNACKBAR_CHANGE":
            return {
                ...state,
                snackbarMessage: action.payload.snackbarMessage,
                snackbarSeverity: action.payload.snackbarSeverity,
                snackbarOpen: action.payload.snackbarOpen
            };
        case "SNACKBAR_CLOSE":
            return {
                ...state,
                snackbarMessage: action.payload.snackbarMessage,
                snackbarSeverity: action.payload.snackbarSeverity,
                snackbarOpen: false
            };
        default:
            return state;
    }
};