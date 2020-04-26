import ApiHelper from "../apiHelper";

export default class FeedbackService {
    public static async addFeedback({ message }: {
        message: string;
    }): Promise<number> {
        return await ApiHelper.addFeedback(message);
    }
}
