import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Song Starter</h1>
      </Link>
      <NavBar />
    </div>
  );
}

export default Header;