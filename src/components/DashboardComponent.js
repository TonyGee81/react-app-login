import React from 'react';
import Login from "./LoginComponent";

class Dashboard extends React.Component {

    render() {
        return( !this.props.isLogged ?


                <Login />
                :


                <div>
                    <h1>Bienvenu sur l'Admin</h1>
                    <div>
                        protected
                    </div>
                </div>
        );

    }
}

export default Dashboard;