import React, {Component} from 'react';
import AppContext, {AppProps} from './AppContext';
import {Subtract} from "../util/typeHelpers";

export function withApp<T extends AppProps = AppProps>(
    WrappedComponent: React.ComponentType<T>
) {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";

    return class AppComponent extends Component<Subtract<T, AppProps>> {
        public static displayName = `withApp(${displayName})`;

        public render() {
            return <AppContext.Consumer>
                {(ctx: AppProps) =>
                    <WrappedComponent {...this.props as T} {...ctx} />
                }
            </AppContext.Consumer>
        }
    }
}