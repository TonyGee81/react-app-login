import React from 'react';
import {Route, Redirect} from "react-router-dom";
import credentials from "../config/credentials.js";
import Dashboard from "./DashboardComponent";


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            username : '',
            password : '',
            error: false,
            log: false
        })

        if(this.props.location){
            if(this.props.location.pathname === '/logout'){
                localStorage.removeItem('logCheck');
                if(this.props.onLog){
                    this.props.onLog(false);
                }
            }
        }
    }

    handleSumit = (e) => {
        e.preventDefault();
        if (credentials.username === this.state.username && credentials.password === this.state.password)
        {
            this.setState({error: false, log: true});
            localStorage.setItem('logCheck', credentials.username);
            this.props.onLog(credentials.username);
        }
        else
        {
            this.setState({error: true})
        }
    }

    handleChange = (e) => {
        e.target.name === 'username' ?
            this.setState({ username : e.target.value }) :
            this.setState({ password : e.target.value }) ;
    }

    render() {
        return(

            this.state.log ?


            <Route>
                <Redirect
                    to={{pathname : '/dashboard', state : { from : "/login"}}}
                />
            </Route>


             :


            this.state.log ?
                <Route>
                    <Redirect
                        to={{pathname : '/dashboard', state : { from : "/login"}}}
                    />
                </Route>
                :
                <div>
                    <div>
                        {this.state.error ? "Erreur d'identification" : ""}
                    </div>
                    <form action="#">
                        <p>
                            <label htmlFor="username"></label>
                            <input type="text" name="username" id="username" onChange={this.handleChange} />
                        </p>
                        <p>
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" onChange={this.handleChange} />
                        </p>
                        <p>
                            <input type="submit" value="Login" onClick={this.handleSumit}/>
                        </p>
                    </form>
                </div>

            );

    }
}

export default Login;