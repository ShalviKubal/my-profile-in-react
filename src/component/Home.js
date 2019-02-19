import React, { Component } from 'react';

class Home extends Component {
    render(props) {
        const userName = this.props.username;
        return (
            <div>
                Home- {userName}
            </div>
            );
    }
}

export default Home;
