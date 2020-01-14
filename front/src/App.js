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
    /*
    {this.state.bool ? (
              <div className="ContainerResult">
                <Map center={this.state.center} zoom={16} width={600} height={400} >
                  <Marker anchor={this.state.coord} payload={1} onClick={this.handleClick} />
                </Map>
                <GetAll coord={this.state.coord} item={this.handleItem} />
              </div>) : ('')}
    */
    return (
      <div className="App" >
        <Login />
        <AutoCompleteAdress />
      </div>
    );
  }
}

export default App;
