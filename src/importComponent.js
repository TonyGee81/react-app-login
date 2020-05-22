import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import Dashboard from './components/DashboardComponent';
import Login from './components/LoginComponent';
import PrivateRoute from './components/PrivateRouteComponent';

function App(props) {
    return (
        <Fragment>
            <Router>
                <div>
                    <ul>
                        <Menu to="/" name="Home" />
                        <Menu to="/login" name="Login" />
                        <Menu to="/dashboard" name="Dashboard" />
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" render={(props) => (<Login isLogged={0} />) } >
                        </Route>
                        <PrivateRoute path="/dashboard" render={ (props) => (<Dashboard  />)}>
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
