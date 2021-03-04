import React from 'react';
import { chord } from 'tonal';
import './Chord.css';

const Chord = () => {
  return (
    <div className="Chord">
      <h1>Chord</h1>
      {/* <p>{chord.name}</p>
      <p>{chord.notes(name)}</p> */}
      <audio></audio>
    </div>
  );
}

export default Chord;