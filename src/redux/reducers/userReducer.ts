import {User} from "../../models/User";
import {GET_AUTHENTICATED_USER_SUCCESS, INITIALIZE_USER} from "../constants";

export const userReducer = (state: User = {username: '', role: ''}, action: any) => {
    switch(action.type){
        case INITIALIZE_USER:
        case GET_AUTHENTICATED_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
