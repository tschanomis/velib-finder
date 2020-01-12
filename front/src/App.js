import React from 'react';

import Login from './components/Login';
import AutoCompleteAdress from './components/AutoCompleteAdress';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'


function App() {
  return (
    <div className="App">
      <Login/>
      <AutoCompleteAdress/>
    </div>
  );
}

export default App;
