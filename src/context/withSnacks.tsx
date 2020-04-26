import * as React from 'react';
import {Component} from 'react';
import {Subtract} from "../util/typeHelpers";
import SnackContext, {SnackyContext} from "./SnackContext";

export function withSnacks<P extends SnackyContext = SnackyContext>(
    WrappedComponent: React.ComponentType<P>
) {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";

    return class SnackComponent extends Component<Subtract<P, SnackyContext>> {
        public static displayName = `withSnacks(${displayName})`;

        public render() {
            return <SnackContext.Consumer>
                {(ctx: SnackyContext) =>
                    <WrappedComponent {...this.props as P} {...ctx}/>
                }
            </SnackContext.Consumer>
        }
    }
}