import * as React from "react";
import {CircularProgress, Grid} from "@material-ui/core";

class Loading extends React.Component {

    public render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <CircularProgress />
            </Grid>
        );
    }
}

export default Loading;
