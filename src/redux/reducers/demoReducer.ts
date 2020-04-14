const STORE_DATA = "Store_Data";
const GET_DATA = "Get_Data";

export interface StoreData {
    data: string;
}

export const demoReducer = (state: StoreData = {data: 'NOT_SET'}, action: any) => {
    switch(action.type){
        case STORE_DATA:
            console.log("STORE: " + action.payload);
            return {data: 'ZAC Did'};
        case GET_DATA:
            console.log("GET: " + action.payload);
            return action.payload;
        default:
            return state;
    }
};