import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const SavedNav = () => {
  return (
    <div className="SavedNav">
      <Link to="./saved">Saved</Link>
    </div>
  );
}

export default SavedNav;