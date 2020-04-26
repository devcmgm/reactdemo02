import React, {Component, ComponentClass} from "react";
import ModalContext from "./ModalContext";

// TODO consider renaming component/props to activeModalComponent and activeModalProps (?)
interface State {
    component: ComponentClass | null;
    props: Record<string, any>;
    showModal: (component: ComponentClass, props: Record<string, any>) => void;
    hideModal: () => void;
}

class ModalProvider extends Component<{}, State> {
    public showModal = (component: ComponentClass, props: Record<string, any> = {}) => {
        this.setState({
            component, 
            props
        })
    };

    public hideModal = () => this.setState({
        component: null,
        props: {}
    });

    public state: State = {
        component: null,
        props: {},
        showModal: this.showModal,
        hideModal: this.hideModal
    };

    public render() {
        return (
            // @ts-ignore
            <ModalContext.Provider value={this.state}>
                {this.props.children}
            </ModalContext.Provider>
        );
    }
}

export default ModalProvider;
