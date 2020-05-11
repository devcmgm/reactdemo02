import * as React from 'react';
import {AppBar, Fab, Grid, IconButton} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import {withGlobal} from "../context/withGlobal";
import {GlobeContext} from "../context/GlobalContext";
import '../global-elements/globalStyles.scss'

class MobileToolbar extends React.Component<GlobeContext> {
    public render() {
        return (
            <AppBar position="fixed" color="primary" className={"appBar"}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MenuIcon/>
                        </IconButton>
                        <Fab color="secondary" aria-label="add" className={"fabButton"}>
                            <AddIcon/>
                        </Fab>
                        <div className={"grow"} />
                        <IconButton edge="end" color="inherit">
                            <MoreIcon/>
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}


export default withGlobal(MobileToolbar);
