import React from 'react';
import { Chord as cord } from 'tonal';
import './Chord.css';

const Chord = (props) => {
  const chordNotes = cord.notes(props.name).map(note => <p>{note}</p>)
  console.log(cord.notes(props.name))
  return (
    <div className="Chord">
      <p className="chord-name">{props.name}</p>
      <div className="chord-notes">{chordNotes}</div>
      <audio></audio>
    </div>
  );
}

export default Chord;