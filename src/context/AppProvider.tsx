import React, {Component} from 'react';
import AppContext from './AppContext';
import {User} from "../models/User";
import UserService from "../redux/services/UserService";

interface State {
    user: User;
    fetchUser: () => void;
}

export default class AppProvider extends Component<{}, State> {

    public fetchUser = async () => {
        const user = await UserService.getAuthenticatedUser();
        this.setState({ user })
        console.log("Debug: " + user)
    };

    public state: State = {
        user: {
            username: '',
            role: '',
        },
        fetchUser: this.fetchUser,
    };

    public render() {
        return (
            <AppContext.Provider value={this.state} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
