import React from 'react';
import {Route, Redirect} from "react-router-dom";

import Dashboard from './DashboardComponent';

class PrivateRoute extends React.Component {

    render() {

        const { ...rest } = this.props;

        return (
            <Route
                { ...rest }
                render={ (rest) =>
                    localStorage.getItem('logCheck') ? <Dashboard { ...rest } /> :
                        <Redirect
                            to={{pathname : '/login', state : { from : "/"}}}
                        />
                }
            />
        )
    }
}

export default PrivateRoute;