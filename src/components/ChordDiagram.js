import React from 'react';
import { Chord as cord } from 'tonal';
import './Chord.css';

const ChordDiagram = (props) => {
  const chordNotes = cord.notes(props.name).map(note => <p key={note} className="single-note">{note}</p>)
  return (
    <div className="ChordDiagram" onClick={() => props.playChord(props.name)}>
      <p className="chord-name">{props.name}</p>
      <p className="note-label">notes</p>
      <div className="chord-notes">{chordNotes}</div>
      <audio></audio>
    </div>
  );
}

export default ChordDiagram;

// https://www.npmjs.com/package/svguitar