import React, { Component } from 'react';
import MenuSide from './MenuSide'
import Home from './Home'
import arts from './articles/articles.json'

class App extends Component {
  render() {
    const articles = arts
    return(
      <div id="colorlib-page">
          <MenuSide/>
          <Home articles={articles}/>
      </div>
    )
  }
}
export default App;
