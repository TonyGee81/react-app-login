import React from 'react';
import {BrowserRouter as  Route, Redirect} from "react-router-dom";

import Dashboard from './DashboardComponent';

class PrivateRoute extends React.Component {

    render() {

        const { ...rest } = this.props;

        console.log("->"+this.props)

        return (
            <Route
                { ...rest }
                render={ (rest) =>
                    rest.isLogged ? <Dashboard { ...rest } /> :
                        <Redirect
                            to={{pathname : '/login', state : { from : "/"}}}
                        />
                }
            />
        )
    }
}

export default PrivateRoute;