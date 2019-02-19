import React, { Component } from 'react';

import { NavLink, Link, Prompt} from 'react-router-dom';

class Navigation extends Component {
    render(props) {
        const loggedIn = this.props.loggedIn;
        return (
            <div>
                <Prompt when={!loggedIn} message = {(location)=>{
                    return location.pathname.startsWith("/home")?"Are You sure?": true;
                }}/>
                <NavLink to="/" exact activeStyle={{color : 'green'}}>Welcome</NavLink>
                <NavLink to="/login/" exact activeStyle={{color : 'green'}}>login</NavLink>
                <NavLink to="/home/shalvi" exact activeStyle={{color : 'green'}}>home</NavLink>
                <Link to="/about/shalvi" exact activeStyle={{color : 'green'}}>about</Link>
                <Link to="/contactus" exact activeStyle={{color : 'green'}}>contactus</Link>
            </div>
            );
    }
}

export default Navigation;
/**/