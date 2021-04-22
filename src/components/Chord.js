import React from 'react';
import { Chord as cord } from 'tonal';
import './Chord.css';

const Chord = (props) => {

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const charts = importAll(require.context('../charts/', false, /\.(png)$/));
  console.log(charts)

  const chordNotes = cord.notes(props.name).map(note => <p key={note} className="single-note">{note}</p>)
  console.log(charts[props.name+'.png'])
  return (
    <div className="Chord" onClick={() => props.playChord(props.name)}>
      <img className="chord-chart" src={charts[props.name+'.png'].default} />
      <p className="chord-name">{props.name}</p>
      <p className="note-label">notes</p>
      <div className="chord-notes">{chordNotes}</div>
    </div>
  );
}

export default Chord;