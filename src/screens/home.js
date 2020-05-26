import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MenuSide from '../components/home/MenuSide'
import Home from '../components/home/Home'

export default () => {
  return (
    <div id="colorlib-page">
      <BrowserRouter>
        <MenuSide />
        <Home />
      </BrowserRouter>

    </div>
  )
}

