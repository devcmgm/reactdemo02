import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Welcome from "./pages/Welcome";
//import LogoutVerify from "./tabs/logout/LogoutTab";

const AppRouter: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact
                    path="/home"
                    render={(props: RouteComponentProps) => (
                        <Welcome {...props} />
                    )}
                />
                <Route exact
                    path="/logoutverify"
                    render={(props: RouteComponentProps) => (
                        <Welcome {...props} />)
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
