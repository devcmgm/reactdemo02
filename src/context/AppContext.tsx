import {Context, createContext} from 'react';
import {User} from "../models/User";

export interface AppProps {
    fetchUser: () => void;
    user: User;
}

export interface ReduxProps {
    user: User;
}

export interface AddFeedbackParameters {
    message: string;
}

export interface AddLogBookItemParameters {
    logContent: string;
    user: string;
}

const AppContext: Context<AppProps> = createContext<AppProps> (
    {
        user: {
            username: '',
            role: '',
        },
        fetchUser: () => {}
    }
);

export default AppContext;
