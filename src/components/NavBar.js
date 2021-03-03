import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
      <button>New Song</button>
      <button>Choose Key</button>
      <button>Major Minor</button>
      <Link to="./poem">Poem</Link>
      <Link to="./saved">Saved</Link>
    </div>
  );
}

export default NavBar;