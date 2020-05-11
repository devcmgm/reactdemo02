import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Checkbox} from "@material-ui/core";
import '../global-elements/globalStyles.scss'

interface ReduxProps {
    offline;
}

interface State {
    Status: boolean;
}

class TabSecond extends React.Component<RouteComponentProps & ReduxProps, State> {



    public render() {

        return (
            <div>
              Tab Main
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        offline: state.offline,
        data: state.jobs
    }
};

export default withRouter(connect(mapStateToProps)(TabSecond));
