import React from 'react';
import './Song.css';
import Chord from './Chord'

const Progression = () => {
  return (
    <div className="Progression">
      <h1>Progression</h1>
      <Chord />
      <Chord />
      <Chord />
      <Chord />
    </div>
  );
}

export default Progression;