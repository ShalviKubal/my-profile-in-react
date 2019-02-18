import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginToApp from './component/LoginToApp';
import Home from './component/Home';
import Welcome from './component/Welcome';
import Error from './component/Error';
import Navigation from './component/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation/>
            <Switch>
                <Route path="/" component={Welcome} exact/>
                <Route path="/login" component={LoginToApp}/>
                <Route path="/home" component={Home}/>
                <Route component={Error}/>
            </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
