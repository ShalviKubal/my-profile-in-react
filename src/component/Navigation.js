import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Welcome</NavLink>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/home">home</NavLink>
            </div>
            );
    }
}

export default Navigation;
