import * as React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Grid, Tab} from "@material-ui/core";
import {withGlobal} from "../context/withGlobal";
import {GlobeContext} from "../context/GlobalContext";
import '../global-elements/globalStyles.scss'

interface State {
    displayTableHistory;
}

class PageToolbar extends React.Component<GlobeContext & RouteComponentProps,  State> {

    public constructor(props) {
        super(props);
        this.state = {
            displayTableHistory: 'Last 24h (Default)'
        };
    }

    private handleTableHistory(e) {
        this.setState(
            {displayTableHistory: e.target.value}
        );
        // TODO Sort table here (Maybe even add to globalHandler to hold data)
    }

    public render() {
        return (
            <Grid
                className={"JobListToolbar"}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                {/*Left*/}
                <Grid item style={{paddingLeft: "15px"}}>
                    <Grid container style={{padding: "5px"}} spacing={1}>
                        <Grid item>
                            <Tab/>
                        </Grid>
                    </Grid>
                </Grid>

                {/*Right*/}
                <Grid item>
                    <Grid container style={{padding: "5px", marginRight: "10px"}} spacing={1}>
                        <Grid item>
                            more buttons
                        </Grid>
                        <Grid item>
                           yes another button
                        </Grid>
                        <Grid item>
                            and finally
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default withGlobal(PageToolbar);
