import React from 'react';
import axios from 'axios';

import Login from './components/Login';
import AutoCompleteAdress from './components/AutoCompleteAdress';
import GetAll from './components/GetAll';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class App extends React.Component {
  state = {
    center: [48.8528, 2.3473],
    coord: null,
    result: []
  }

  handleCoord = (data) => {
    const dataReverse = data.reverse()
    this.setState({ coord: dataReverse })
    this.setState({ center: dataReverse })
  }

  handleTest2 = () => {
    console.log("hello");
    axios.post('http://localhost:4000/data/data', {
      lat: this.state.coord[0],
      lon: this.state.coord[1]
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick = (event, anchor, payload) => {
    console.log("hello click");
  }

  render() {
    return (
      <div className="App" >
        <Login />
        <AutoCompleteAdress fetchCoord={this.handleCoord} />
        <Map center={this.state.center} zoom={14} width={600} height={400} >
          <Marker anchor={this.state.coord} payload={1} onClick={this.handleClick} />
        </Map>
        <GetAll />
        <button type='submit' onClick={this.handleTest2}>Get limit</button>
      </div>
    );
  }
}

export default App;
