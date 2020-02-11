import React from 'react';
import hotel from './hotel.png'
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <img src={hotel} className="logo" alt="logo" />
      <h1 className="title">Cheapest HOTEL option</h1>
    </header>
  )
}

export default Header;