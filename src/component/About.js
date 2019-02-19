import React, { Component } from 'react';

class About extends Component {
    render(props) {
        const userName = this.props.match.params.username;
        return (
            <div>
                About {userName}
            </div>
            );
    }
}

export default About;
