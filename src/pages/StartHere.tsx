import * as React from 'react';
import Button from "../global-elements/Button";
import {RouteComponentProps, withRouter} from "react-router";
import UserService from "../redux/services/UserService";
import {toast} from "react-toastify";
import {TOAST_MESSAGES} from "../global";
import {connect} from "react-redux";
import {User} from "../models/User";
import AppBar from '@material-ui/core/AppBar';
import {Hidden, Grid} from "@material-ui/core";
import '../global-elements/globalStyles.scss'
import {Simulate} from "react-dom/test-utils";
import store from '../redux/store'
import {offline} from "@redux-offline/redux-offline";
import {Snack} from "../redux/reducers/snackReducer";
import {handleSnack} from "../redux/actions/snack";
import AppTabHandler from "../AppTabHandler"
import TabPageHeader from './TabPageHeader';
import PageToolbar from './PageToolbar';
import MiniMenu from '../MiniMenu';
import Tab from './Tab'
import {TAB_ONE, TAB_TWO, LOGOUT_TAB} from "../TabConstants";
import {withGlobal} from "../context/withGlobal";
import {GlobeContext} from "../context/GlobalContext";
import BuildIcon from '@material-ui/icons/Build'
import NotesIcon from '@material-ui/icons/Notes';

interface ReduxProps {
    offline: boolean;
}


interface State {
    offline: any;
}

type Props = RouteComponentProps & ReduxProps

class StartHere extends React.Component<Props, State> {
    handleSnackFn(arg0: { snackbarOpen: boolean; snackbarMessage: string; snackbarSeverity: string; }) {
        throw new Error("Method not implemented.");
    }

    constructor(props) {
        super(props);
        const zac = store.getState();
        this.state = {
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
            console.log(users)

           this.theusers = users
        });
    }

    public name2 = () => {
        alert("Works:")
    }
    public onClick = async () => {
        this.handleSnackFn({
            snackbarOpen: true,
            snackbarMessage: 'Success: Job created!',
            snackbarSeverity: 'success'
        });

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
                <Grid container direction="column">
                    <Grid item style={{width: '100%', position: 'sticky', top: 0, zIndex: 3}}>
                        <h1>Welcome</h1>
                        <TabPageHeader {...this.props} />
                    </Grid>
                    <Grid item style={{width: '100%'}}>
                        <AppTabHandler {...this.props}/>
                    </Grid>
                    <Hidden smUp>
                        <PageToolbar {...this.props} />
                    </Hidden>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    const {users, offline} = state
    return {
        user: state.user,
        offline: state.offline,
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSnackFn: (snack: Snack) => {
            dispatch(handleSnack(snack));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartHere));
