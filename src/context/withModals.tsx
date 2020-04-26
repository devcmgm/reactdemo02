import React, {Component} from 'react';
import ModalContext, {ModeContext} from './ModalContext';
import {Subtract} from "../util/typeHelpers";

export function withModals<P extends ModeContext = ModeContext>(
    WrappedComponent: React.ComponentType<P>
) {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";

    return class ModalComponent extends Component<Subtract<P, ModeContext>> {
        public static displayName = `withModals(${displayName})`;

        public render() {
            return <ModalContext.Consumer>
                {(ctx: ModeContext) =>
                    <WrappedComponent {...this.props as P} {...ctx}/>
                }
            </ModalContext.Consumer>
        }
    }
}