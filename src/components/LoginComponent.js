import React from 'react';
import {BrowserRouter as Redirect} from "react-router-dom";
import credentials from "../config/credentials.js";


class Login extends React.Component {

    constructor(props){
        super(props);
        console.log(credentials);
        this.state = ({
            username : '',
            password : '',
            error: false,
            log: false
        })
    }

    handleSumit = (e) => {
        e.preventDefault();
        if (credentials.username === this.state.username && credentials.password === this.state.password)
        {
            this.setState({error: false, log: true})
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
                <Redirect
                    to={{pathname : '/', state : { from : "/login"}}}
                />
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