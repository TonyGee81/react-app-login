import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

class Menu extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.children.map( (item,key) => {
                    return <li key={key}>{item}</li>;
                } )}
            </ul>
        )
    }
}

export default Menu;