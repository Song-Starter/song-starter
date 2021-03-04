import React from 'react';
import { Chord as cord } from 'tonal';
import './Chord.css';

const Chord = (props) => {
  console.log(props)
  return (
    <div className="Chord">
      <p>{props.name}</p>
      <p>{cord.notes(props.name)}</p>
      <audio></audio>
    </div>
  );
}

export default Chord;