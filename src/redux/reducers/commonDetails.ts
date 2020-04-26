interface CommmonDetailsState {
    pauseQueue: boolean;
}
export const commonDetails = (state: CommmonDetailsState = {pauseQueue: false}, action: any) => {
    switch (action.type) {
        case 'TOGGLE_QUEUE':
            return {pauseQueue: !state.pauseQueue};
        default:
            return state;
    }
};