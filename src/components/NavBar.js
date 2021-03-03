import React from 'react';
import './Header.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <button>New Song</button>
      <button>Choose Key</button>
      <button>Major Minor</button>
    </div>
  );
}

export default NavBar;