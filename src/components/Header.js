import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import {NavLink, Link} from 'react-router-dom'

const Header = ({createNewSong}) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="title">SongStarter</h1>
      </Link>
      <div className="navigation">
        <NavBar createNewSong={createNewSong} />
        <div className="site-nav">
            <NavLink exact to="/home" activeStyle={{
                fontWeight: "bold",
                textDecoration: "underline"
              }}>Home</NavLink>
            <NavLink to="/saved" activeStyle={{
                fontWeight: "bold",
                textDecoration: "underline"
              }}>Saved</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;