import * as React from 'react';
import Button from "../global-elements/Button";
import {RouteComponentProps, withRouter} from "react-router";
import UserService from "../redux/services/UserService";
import {toast} from "react-toastify";
import {TOAST_MESSAGES} from "../global";
import {connect} from "react-redux";
import {User} from "../models/User";
import {Hidden} from "@material-ui/core";
import './Welcome.scss'
import {Simulate} from "react-dom/test-utils";
import store from '../redux/store'
import {offline} from "@redux-offline/redux-offline";


interface ReduxProps {
    user: User;
    i: number;
    users: []
}


interface State {
    user: string;
    i: number;
    musers: User[]
    id: number;
    email: string;
    offline: any;
}

class Welcome extends React.Component<RouteComponentProps, State> {

    constructor(props) {
        super(props);
        const zac = store.getState();
        this.state = {
            i: 0,
            user: 'none',
            musers: [],
            email: '',
            id: 0,
            offline: offline
        }
        this.loadData();
    }
    data2 = ""
    // @ts-ignore
    theusers: User = []
    online = true

    public componentDidMount(): void {



    }

    private async loadData() {
        await UserService.getAuthenticatedUser().then((users) => {

            console.log(users[this.state.i].username)
            this.data2 = users[this.state.i].username

            this.setState({user: users[this.state.i].username})
            // @ts-ignore
            this.setState({i: 0, user: users[this.state.i].username, musers: users})
            this.theusers = users
        });
    }
    public name2 = () => {

        this.setState({i: this.state.i + 1})
        this.data2 = this.theusers[this.state.i].username
        alert("Works:" + this.state.i + " - " + this.theusers[this.state.i].username)
    }
    public onClick = async () => {

        this.setState({i: this.state.i + 1})
        await UserService.ready().then((success: boolean) => {
            if (success) {
                alert('works')
                this.props.history.push(`/logout`);
            } else {
                toast.error(TOAST_MESSAGES.WELCOME_ERROR, {
                    className: 'welcome-error-message',
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false,
                    draggable: false
                });
            }
        });
    };


    public render() {
        return (
            <div className="Welcome--wrapper">
                <h1>Welcome</h1>
                Yes you got here.

                {this.data2 ? this.data2 : 'work'}
                <Button.Primary className="welcome-button" onClick={this.onClick.bind(this)}>Page Here</Button.Primary>
                <Button.Primary className="welcome-button" onClick={this.name2.bind(this)}>Next Namee</Button.Primary>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
   const { users, offline } = state
    return {
        user: state.user,
        offline: state.offline
    }
};

export default withRouter(connect(mapStateToProps, null)(Welcome));
