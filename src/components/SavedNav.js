import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const SavedNav = ({saveSong}) => {
  return (
    <div className="SavedNav">
      <Link to="./saved">Show Saved</Link>
      <button onClick={saveSong}>Save Song</button>
    </div>
  );
}

export default SavedNav;