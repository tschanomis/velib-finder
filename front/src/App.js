import React from 'react';

import Login from './components/Login';
import AutoCompleteAdress from './components/AutoCompleteAdress';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class App extends React.Component {
  state = {
    center: [48.8528, 2.3473],
    coord: null
  }

  handleCoord = (data) => {
    const dataReverse = data.reverse()
    this.setState({ coord: dataReverse })
    this.setState({ center: dataReverse })
  }

  handleTest = () => {
    console.log("hello");
  }

  render() {
    return (
      <div className="App" >
        <Login />
        <AutoCompleteAdress fetchCoord={this.handleCoord} />
        <Map center={this.state.center} zoom={14} width={600} height={400}>
          <Marker anchor={this.state.coord} payload={1} onClick={({ event, anchor, payload }) => { }} />
        </Map>
      </div>
    );
  }
}

export default App;
