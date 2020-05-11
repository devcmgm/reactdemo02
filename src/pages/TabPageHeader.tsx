import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import AppBar from '@material-ui/core/AppBar';
import {Hidden} from "@material-ui/core";
import BuildIcon from '@material-ui/icons/Build'
import NotesIcon from '@material-ui/icons/Notes';
import { GlobeContext } from '../context/GlobalContext';
import { withGlobal } from '../context/withGlobal';
import '../global-elements/globalStyles.scss'
import AppTabHandler from '../AppTabHandler';
import { TAB_ONE, TAB_TWO } from '../TabConstants';
import Tab from './Tab';


interface ReduxProps {
    offline:  boolean;
}

class TabPageHeader extends React.Component<ReduxProps & RouteComponentProps & GlobeContext> {
    
    public render() {

        return (
            <div className="root">
                <h1>Header Page</h1>
                <Hidden smDown>
                       <Tab
                            className={this.context.getTab === TAB_ONE ? 'first-tab jobTab active' : 'first-tab jobTab'}
                            onClick={() => {
                                alert("ONE")
                                this.context.setTab(TAB_ONE);
                            }}
                        >
                            <BuildIcon
                                className={"icon"}
                                style={{color: this.context.getTab === TAB_ONE ? "#1954d0" : "#101010"}}
                            />
                            <span className="bold text">
                            TAB One
                        </span>
                        </Tab>
                        <Tab
                            className={this.context.getTab === TAB_TWO ? 'logtab active' : 'logTab'}
                            onClick={() => {
                                alert("TWO")
                                this.context.setTab(TAB_TWO);
                            }}
                        >
                            <NotesIcon
                                className={"icon"}
                                style={{color: this.context.getTab === TAB_TWO ? "#1954d0" : "#101010"}}
                            />
                            <span className="bold text">
                            Log Book
                        </span>
                        </Tab>
                </Hidden>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offline: state.offline
    }
};

export default withRouter(connect(mapStateToProps, null)(withGlobal(TabPageHeader)));
