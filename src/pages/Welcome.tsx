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

interface ReduxProps {
    user: User;
    offline: any;
    location: any;
    history: any;
}


interface State {
    updateIntervalID: any;

}

class Welcome extends React.Component<RouteComponentProps> {
    public onClick = async () => {
        await UserService.ready().then((success: boolean) => {
            if (success) {
                this.props.history.push("/home");
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
                <Button.Primary className="welcome-button" onClick={this.onClick.bind(this)}>Start Here</Button.Primary>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

export default withRouter(connect(mapStateToProps, null)(Welcome));
