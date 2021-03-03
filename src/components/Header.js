import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

const Header = ({createNewSong}) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Song Starter</h1>
      </Link>
      <NavBar createNewSong={createNewSong}/>
    </div>
  );
}

export default Header;