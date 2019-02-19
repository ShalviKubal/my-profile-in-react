import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch,Redirect, Prompt} from 'react-router-dom';

import LoginToApp from './component/LoginToApp';
import Home from './component/Home';
import Welcome from './component/Welcome';
import Error from './component/Error';
import Navigation from './component/Navigation';
import About from './component/About';
import ContactUs from './component/ContactUs';

class App extends Component {
  state = {
    loggedIn : false
  }
  handleLogin = ()=>{
    this.setState(prevState =>({
      loggedIn: !prevState.loggedIn
    }))
    console.log(this.state.loggedIn)
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <input type="button" value={this.state.loggedIn?"log out":"log in"} onClick={this.handleLogin.bind(this)}/>
            <Navigation loggedIn={this.state.loggedIn}/>
            <Switch>
                <Route path="/" component={Welcome} exact/> 
                <Route path="/login/" component={LoginToApp} strict/> 
                <Route path="/home/:username" exact strict render={
                  ({match})=>(
                      this.state.loggedIn ? (<Home username={match.params.username}/>) :(<Redirect to="/"/>)
                  )}/>              
                <Route path="/about/:username" component={About}>about</Route>
                <Route path="/contactus" component={ContactUs}>contactus</Route>
                <Route component={Error}/>
            </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// exact is used so that partial matched urls are not included
//strict is used so that /login/ is true but not /login