import React from 'react';
import './Header.css';
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="Header">
      <h1>Song Starter</h1>
      <NavBar />
    </div>
  );
}

export default Header;