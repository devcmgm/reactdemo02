import * as React from 'react';
import Button from "../global-elements/Button";
import {RouteComponentProps, withRouter} from "react-router";
import UserService from "../redux/services/UserService";
import {toast} from "react-toastify";
import {TOAST_MESSAGES} from "../global";
import {connect} from "react-redux";
import {User} from "../models/User";
import {Hidden} from "@material-ui/core";
import '../global-elements/globalStyles.scss'

interface ReduxProps {
    user: User;
    offline: any;
    location: any;
    history: any;
}


interface State {
    updateIntervalID: any;

}

class Logout extends React.Component<RouteComponentProps> {
    public onClick = () => {
        this.props.history.push("/");
    };

    user = this.props;

    public render() {
        return (
            <div className="Welcome--wrapper">
                <h1>Logout</h1>
                Yes you got here.  {this.user.children}
                <Button.Primary className="logout-button" onClick={this.onClick}>Go Home</Button.Primary>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
};

export default withRouter(connect(mapStateToProps, null)(Logout));
