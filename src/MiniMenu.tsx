import * as React from "react";
import {Online, Offline} from 'react-detect-offline';
import {Button, Hidden, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import BuildIcon from "@material-ui/icons/Build";
import NotesIcon from "@material-ui/icons/Notes";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import {withGlobal} from "./context/withGlobal";
import {GlobeContext} from "./context/GlobalContext";
import {TAB_ONE, TAB_TWO} from "./TabConstants";
import './MiniMenu.scss';

interface ActiveState {
    menuOpen: boolean;
}

interface Props {
    top?: boolean;
}

class MiniMenu extends React.Component<GlobeContext & Props, ActiveState> {

    public constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    public render() {
        return (
            <Hidden mdUp>
                <Button size="large" id="menuButton" onClick={() => {
                    this.setState({menuOpen: true})
                }}>
                    <MenuIcon
                        className={"Landing--Tab-Icon"}
                        style={{color: "#f5f5f5"}}
                    />
                </Button>
                <Menu
                    id="menu"
                    className={"dropdown-menu"}
                    anchorEl={document.getElementById("menuButton")}
                    open={this.state.menuOpen}
                    onClose={() => {
                        this.setState({menuOpen: false})
                    }}
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: this.props.top ? 'bottom' : 'top',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem alignItems={"center"} onClick={() => {
                        this.props.setTab(1);
                        this.setState({menuOpen: false});
                    }}>
                        <BuildIcon
                            className={"icon"}
                            style={{color: this.props.getTab === TAB_ONE ? "#1954d0" : "#101010"}}
                        />
                        <span className="bold text">
                            Works here
                        </span>
                    </MenuItem>
                    <MenuItem alignItems={"center"} onClick={() => {
                        this.props.setTab(2);
                        this.setState({menuOpen: false});
                    }}>
                        <NotesIcon
                            className={"icon"}
                            style={{color: this.props.getTab === TAB_TWO ? "#1954d0" : "#101010"}}
                        />
                        <span className="bold text">
                            more this
                        </span>
                    </MenuItem>
                    <Online>
                        <MenuItem alignItems={"center"}
                            onClick={() => {
                                this.props.setTab(3);
                                this.setState({menuOpen: false});
                            }}
                        >
                            <ExitToAppIcon
                                className={"icon"}
                                style={{color: "#101010"}}
                            />
                            <span className="bold text">
                                Logout
                            </span>
                        </MenuItem>
                    </Online>
                    <Offline>
                        <MenuItem disabled alignItems={"center"} onClick={() => {
                            this.setState({menuOpen: false});
                        }}>
                            <OfflineBoltIcon
                                className={"icon"}
                                style={{color: "#101010"}}
                            />
                            <span className="bold text">
                                Offline
                            </span>
                        </MenuItem>
                    </Offline>
                </Menu>
            </Hidden>
        );
    }
}


export default withGlobal(MiniMenu);
