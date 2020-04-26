import RequestHelper from "./RequestHelper";
import {User} from "../models/User";

const apiBase = process.env.REACT_APP_API_URL || "";


/* #### User Data #### */
const getAuthorizedUser = async (): Promise<User> => {
    const response = await RequestHelper.get(`${apiBase}/authorizedUser`);
    return response.data;
};

const ready = async (): Promise<boolean> => {
    const response = await RequestHelper.get(`${apiBase}/logout`);
    return response.status === 200;
};


const logoutUser = async (): Promise<boolean> => {
    const response = await RequestHelper.post(`${apiBase}/logout`);
    return response.status === 200;
};

/* #### Feedback #### */
const addFeedback = async (message: string): Promise<number> => {
    var url=`${apiBase}/feedback/add`;
    const response = await RequestHelper.post( url, {message: message}) ;
    return response.status;
};


const helpers = {
    addFeedback,
    getAuthorizedUser,
    logoutUser,
    ready,
};

export default helpers;
