import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import Logout from "./pages/Logout";
import Data from "./pages/Data";

const AppRouter: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact
                    path="/logout"
                    render={(props: RouteComponentProps) => (
                        <Logout {...props} />)
                    }
                />
                <Route exact
                       path="/authorizedUser"
                       render={(props: RouteComponentProps) =>
                           <Data {...props} />
                       }
                />
                <Route exact
                       path="/"
                       render={(props: RouteComponentProps) =>
                           <Welcome {...props} />
                       }
                />
            </Switch>
            {props.children}
        </BrowserRouter>
    );
};

export default AppRouter;
