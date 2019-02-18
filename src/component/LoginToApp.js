import React, { Component } from 'react';

class LoginToApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                userName : "",
                password : ""
            }
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange =  this.handleInputChange.bind(this);
    }
    handleLogin(event){
        event.preventDefault();
        console.log(this.state)
    }
    handleInputChange(event){
        const user = this.state.user;
        const propertyName = event.target.type === "text" ? "userName" : "password";
        user[propertyName] = event.target.value;
        this.setState({
            user: user
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input type="text" onChange={this.handleInputChange}/>
                    <input type="password" onChange={this.handleInputChange}/>
                    <input type="submit"/>
                </form>
            </div>
            );
    }
}

export default LoginToApp;
