
export const baseURI = process.env.REACT_APP_API_URL || "";

export const TOAST_IDS = {
    DASHBOARD: 1,
    JOB_FORM: 2
};


export const TOAST_MESSAGES = {
    WELCOME_ERROR: 'Unable To Record Agreement. Please Try Again.',
    DASHBOARD_VALIDATION_ERROR: 'Cannot Start. Errors Found in Page.',
    OFFLINE_ERROR: 'Error: Currently Offline. Try Reconnecting.',
    ADD_FEEDBACK_SUCCESS: 'Feedback Successfully Saved',
    ADD_FEEDBACK_ERROR: 'Feedback Error',
    ADD_FEEDBACK_OFFLINE: 'The application is offline, syncing soon',
};
