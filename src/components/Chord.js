import React from 'react';
import { Chord as cord } from 'tonal';
import './Chord.css';

const Chord = (props) => {
  const chordNotes = cord.notes(props.name).map(note => <p key={note} className="single-note">{note}</p>)
  return (
    <div className="Chord">
      <p className="chord-name">{props.name}</p>
      <p className="note-label">notes</p>
      <div className="chord-notes">{chordNotes}</div>
      <audio></audio>
    </div>
  );
}

export default Chord;