import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";

import Menu from './components/MenuComponent';
import Home from './components/HomeComponent'
import Login from './components/LoginComponent';
import Dashboard from './components/DashboardComponent';

import PrivateRoute from './components/PrivateRouteComponent';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            isLogged : false
        })
    }

    onLog = (login) => {
        this.setState({
            isLogged : login
        })
    }

    render(){
        return (
            <Fragment>
                {
                    this.state.isLogged ? 'Bienvenu ' + this.state.isLogged : ""
                }
                <Router>
                    <div>
                        <Menu>
                            <Link to="/">Home</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            {localStorage.getItem('logCheck') ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
                        </Menu>

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login"
                                   render={ props => (
                                       <Login onLog={this.onLog}
                                              isLogged={localStorage.getItem('logCheck')} {...props} />
                                       )} />
                            <Route exact path="/logout"
                                   render={ props => (
                                       <Login onLog={this.onLog}
                                              isLogged={localStorage.getItem('logCheck')} {...props} />
                                       )} />
                            <PrivateRoute path="/dashboard" render={ (props) => (<Dashboard  />)}>
                            </PrivateRoute>
                        </Switch>
                    </div>
                </Router>

            </Fragment>
        );
    }
}

export default App;
