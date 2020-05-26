import React, { Component } from 'react';
import MenuSide from './components/home/MenuSide'
import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <MenuSide />
        <Home />
      </div>
    )
  }
}
export default App;
