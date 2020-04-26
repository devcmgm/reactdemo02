import {CREATE_JOB_OFFLINE, UPDATE_LAST_CREATED_JOB_ID} from "../constants";
import {OfflineAction} from "@redux-offline/redux-offline/lib/types";

//const getMethod = (action: [{ meta: { offline: { effect: { method: any; }; }; }; }]) => action.meta.offline.effect.method || "GET";
//const getUrl = (action: { meta: { offline: { effect: { url: any; }; }; }; }) => action.meta.offline.effect.url;
//const getHeaders = (action: { meta: { offline: { effect: { headers: any; }; }; }; }, transactionID: any) => { return [...action, ...action.meta.offline.effect.headers, {"app-offline": transactionID}]};


export const offlineReducer = (array: any[], action: any, context: any) => {
    switch(action.type){
        case UPDATE_LAST_CREATED_JOB_ID:
            const filteredOutbox = array.filter(test => test.type != "CREATE_JOB_OFFLINE" && test.payload.id != action.payload.jobID);
            return [...filteredOutbox, action];
        case 'DELETE_OFFLINE_OUTBOX':
            return [];
        default:
            console.log(JSON.stringify(action));
            console.log(JSON.stringify(array));
            return [...array, action];
    }
};