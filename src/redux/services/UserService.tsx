import {User} from "../../models/User";
import ApiHelper from "../apiHelper";

export default class UserService {
    public static async getAuthenticatedUser(): Promise<User> {
        console.log("GET USER HERE")
        return await ApiHelper.getAuthorizedUser();
    }

    public static async ready(): Promise<boolean> {
        return await ApiHelper.ready();
    }

    public static async logoutUser(): Promise<boolean> {
        return await ApiHelper.logoutUser();
    }
}