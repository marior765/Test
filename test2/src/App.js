import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './components/Login';
import Dashboard from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='route'>
          <Switch>
            <Route exact path="/" render={() => ( localStorage.getItem('Login') === 'test@email.com' && localStorage.getItem('Password') === 'test' 
              ? <Redirect to='/Dashboard' /> 
              : <Redirect to='/Login' />  )}/>
            <Route path='/Login' component={Login} />
            <Route path='/Dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

//<Route exact path="/" render={() => ( localStorage.getItem('Login') === 'test@email.com' && localStorage.getItem('Password') === 'test' 
              //? <Redirect to='/Dashboard' /> 
              //: <Redirect to='/Login' />  )}/>
            //<Route path='/Login' component={Login} />
            //<Route path='/Dashboard' component={Dashboard} />