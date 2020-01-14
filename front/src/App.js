import React from 'react';

import Login from './components/Login';
import AutoCompleteAdress from './components/AutoCompleteAdress';

import './App.css'

class App extends React.Component {
  state = {
    center: [48.8528, 2.3473],
    coord: [],
    items: [],
    bool: false
  }

  render() {
    return (
      <div className="App" >
        <Login />
        <AutoCompleteAdress />
      </div>
    );
  }
}

export default App;
