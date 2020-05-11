import {Context, createContext} from 'react';
import {User} from "../models/User";

export interface AppProps {
    fetchUser: () => void;
    user: User;
}

export interface ReduxProps {
    user: User;
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
