import AppRouter from "./AppRouter";
import * as React from "react";
import {connect} from "react-redux";
import {getAuthenticatedUser} from "./redux/actions/user";
import SnackbarContainer from "./global-elements/SnackbarContainer";

interface ReduxProps {
    fetchUserFn: () => void,
}

class AppManager extends React.Component<ReduxProps> {
    public async componentDidMount() {

    }

    public render() {
        return <AppRouter>
            <SnackbarContainer/>
        </AppRouter>;
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUserFn: () => dispatch(getAuthenticatedUser())
    }
};

export default connect(null, mapDispatchToProps)(AppManager);
