import React from 'react';

import Login from './components/Login';
import AutoCompleteAdress from './components/AutoCompleteAdress';
import GetAll from './components/GetAll';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import './App.css'

class App extends React.Component {
  state = {
    //center: [48.8528, 2.3473],
    coord: null,
    result: [],
    items:[],
    bool: false
  }

  handleCoord = (data) => {
    const dataReverse = data.reverse()
    this.setState({ coord: dataReverse })
    //this.setState({ center: dataReverse })
  }

  handleMap = () => {
    this.setState({ bool: true })
  }

  handleItem = (data) => {
    console.log(data)
    // have to fetch data and coord in one function
  }

  handleClick = (event, anchor, payload) => {
    console.log("hello click");
  }

  render() {
    return (
      <div className="App" >
        <Login />
        <AutoCompleteAdress fetchCoord={this.handleCoord} displayMap={this.handleMap} />
        {this.state.bool ? (
          <div className="ContainerResult">
            <Map center={this.state.center} zoom={16} width={600} height={400} >
              <Marker anchor={this.state.coord} payload={1} onClick={this.handleClick} />
            </Map>
            <GetAll coord={this.state.coord} item={this.handleItem}/>
          </div>) : ('')}
      </div>
    );
  }
}

export default App;
