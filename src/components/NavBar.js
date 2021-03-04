import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <button onClick={() => props.createNewSong()}>New Song</button>
      <button>Choose Key</button>
      <button>Major Minor</button>
      <Link to="./poem">Poem</Link>
      <Link to="./saved">Saved</Link>
    </div>
  );
}

export default NavBar;