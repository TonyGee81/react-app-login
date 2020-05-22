import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {

    render() {
        return (
            <li><Link to={this.props.to}>{this.props.name}</Link></li>
        )
    }
}

export default Menu;