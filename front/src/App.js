import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Data from './components/Data';

import './App.css'

class App extends React.Component {
  state = {
    bool: false,
    log: false
  }

  handleLog = () => {
    this.setState({ log: true })
  }

  render() {
    return (
      <Router>
        {this.state.log ? <Redirect to="/data" /> : '' }
        <Switch>
          <div className="App" >
            <Route path="/login">
              <Login log={this.handleLog} />
            </Route>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
