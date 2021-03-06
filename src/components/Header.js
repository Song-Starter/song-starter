import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import SavedNav from './SavedNav'
import {Link} from 'react-router-dom'

const Header = ({createNewSong, saveSong}) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="title">Song Starter</h1>
      </Link>
      <div className="navigation">
        <NavBar createNewSong={createNewSong}/>
        <SavedNav saveSong={saveSong}/>
      </div>

    </div>
  );
}

export default Header;