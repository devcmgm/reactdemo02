import React, {Component} from "react";
import GlobalContext from "./GlobalContext";

interface State {
   data: string;
}

class GlobalProvider extends Component<{}, State> {

    public state: State = {
        data: 'data start'
    };

    public render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export default GlobalProvider;

