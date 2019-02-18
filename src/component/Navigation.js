import React, { Component } from 'react';

import { NavLink, Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Welcome</NavLink>
                <NavLink to="/login/">login</NavLink>
                <NavLink to="/home/:username">home</NavLink>
                <Link to="/about">about</Link>
                <Link to="/contactus">contactus</Link>
            </div>
            );
    }
}

export default Navigation;
