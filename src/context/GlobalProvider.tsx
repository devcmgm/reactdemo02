import React, {Component} from "react";
import GlobalContext from "./GlobalContext";

interface State {
    isPrimary: boolean;
    setPrimary: (boolean: boolean) => void;

    getTab: number;
    setTab: (number: number) => void;
}

class GlobalProvider extends Component<{}, State> {

    public setPrimary = (primary: boolean) => {
        this.setState({isPrimary: primary})
    }

    public setTab = (tab: number) => {
        this.setState({getTab: tab})
    }

    public state: State = {
        isPrimary: true,
        setPrimary: this.setPrimary,

        getTab: 1,
        setTab: this.setTab
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

