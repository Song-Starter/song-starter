import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const SavedNav = ({saveSong}) => {
  return (
    <div className="SavedNav">
      <Link to="./saved">Show Saved</Link>
    </div>
  );
}

export default SavedNav;