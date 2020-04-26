import React, {Component} from 'react';
import GlobalContext, {GlobeContext} from './GlobalContext';
import {Subtract} from "../util/typeHelpers";

export function withGlobal<P extends GlobeContext = GlobeContext>(
    WrappedComponent: React.ComponentType<P>
) {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";

    return class ModalComponent extends Component<Subtract<P, GlobeContext>> {
        public static displayName = `withModals(${displayName})`;

        public render() {
            return <GlobalContext.Consumer>
                {(ctx: GlobeContext) =>
                    <WrappedComponent {...this.props as P} {...ctx}/>
                }
            </GlobalContext.Consumer>
        }
    }
}

