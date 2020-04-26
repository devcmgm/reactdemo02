import React, {Component, ComponentClass} from "react";
import SnackContext from "./SnackContext";

export interface SnackVariant {
    type: "error" | "warning" | "info" | "success";
}

interface State {
    isOpen: boolean;
    variant: SnackVariant;
    showSnack: (variant: SnackVariant, snackMessage: string) => void;
    closeSnack: () => void;
    snackMessage: string;
}

class SnackProvider extends Component<{}, State> {

    public showSnack = (variant: SnackVariant, snackMessage: string) => {
        this.setState({isOpen: true, variant: variant, snackMessage: snackMessage});
    };

    public closeSnack = () => {
        this.setState({isOpen: false});
    }

    public state: State = {
        isOpen: false,
        variant: {type: "success"},
        showSnack: this.showSnack,
        closeSnack: this.closeSnack,
        snackMessage: '',
    };

    public render() {
        return (
            <SnackContext.Provider value={this.state}>
                {this.props.children}
            </SnackContext.Provider>
        );
    }
}

export default SnackProvider;
