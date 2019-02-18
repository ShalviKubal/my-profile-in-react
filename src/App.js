import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginToApp from './component/LoginToApp';
import Home from './component/Home';
import Welcome from './component/Welcome';
import Error from './component/Error';
import Navigation from './component/Navigation';
import About from './component/About';
import ContactUs from './component/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation/>
            <Switch>
                <Route path="/" component={Welcome} exact/> 
                <Route path="/login/" component={LoginToApp} strict/> 
                <Route path="/home/:username" component={Home}/>              
                <Route path="/about" component={About}>about</Route>
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