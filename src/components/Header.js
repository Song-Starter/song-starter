import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

const Header = ({createNewSong, showHideSeventhsOption}) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="title">Song Starter</h1>
      </Link>
      <div className="navigation">
        <NavBar createNewSong={createNewSong} showHideSeventhsOption={showHideSeventhsOption}/>
        <div className="site-nav">
            <Link to="/">Home</Link>
            <Link to="/saved">Saved</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;