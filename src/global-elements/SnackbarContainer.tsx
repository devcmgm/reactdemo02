
import * as React from "react";

import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {withSnacks} from "../context/withSnacks";
import {SnackyContext} from "../context/SnackContext";
import {connect} from "react-redux";
import {SnackAction} from "../redux/reducers/snackReducer";
import {closeSnack, handleSnack} from "../redux/actions/snack";

interface ReduxProps{
    snackbar: SnackAction;
    closeSnackFn: (snackParameters: SnackAction) => void;
}

class SnackbarContainer extends React.Component<SnackyContext & ReduxProps> {

    public render() {
        return (
            <React.Fragment>
                <Snackbar
                    open={this.props.snackbar.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={(event, reason) => {
                        if(reason === 'clickaway'){ return; }
                        this.props.closeSnackFn({snackbarMessage: this.props.snackbar.snackbarMessage, snackbarOpen: false, snackbarSeverity: this.props.snackbar.snackbarSeverity})
                    }}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                    <Alert
                        onClose={() => { this.props.closeSnackFn({snackbarMessage: this.props.snackbar.snackbarMessage, snackbarOpen: false, snackbarSeverity: this.props.snackbar.snackbarSeverity})}}
                        severity={this.props.snackbar.snackbarSeverity}>
                        {this.props.snackbar.snackbarMessage}
                    </Alert>
                </Snackbar>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        snackbar: state.snackbar,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        closeSnackFn: (snackParameters: SnackAction) => {
            dispatch(handleSnack(snackParameters));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnacks(SnackbarContainer));
