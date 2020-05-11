import * as React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {withGlobal} from "./context/withGlobal";
import {GlobeContext} from "./context/GlobalContext";
import {TAB_ONE, TAB_TWO, LOGOUT_TAB} from "./TabConstants";
import TabMain from './pages/TabMain';
import TabSecond from './pages/TabSecond';
import TabLogout from './pages/TabLogout';
import TabError from './pages/TabError';

class AppTabHandler extends React.Component<GlobeContext & RouteComponentProps> {

    public getTab = (tab: number) => {
        switch(tab){
            case TAB_ONE:
                return <TabMain {...this.props}/>;
            case TAB_TWO:
                return <TabSecond {...this.props}/>;
            case LOGOUT_TAB:
                return <TabLogout {...this.props}/>;
            default:
                return <TabError/>
        }
    };

    public render() {
        return (
            <div>
                {this.getTab(this.props.getTab)}
            </div>
        )
    }
}

export default withGlobal(AppTabHandler);
