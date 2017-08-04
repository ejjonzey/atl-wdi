import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Splashimage from './Components/Splashimage';
import Description from './Components/Description';
import MenuList from './Components/MenuList';
import LocationList from './Components/LocationList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Splashimage/>
        <Description/>
        <MenuList/>
        <LocationList/>
      </div>
    );
  }
}

export default App;
