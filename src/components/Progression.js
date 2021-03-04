import React from 'react';
import './Song.css';
import Chord from './Chord'

const Progression = ({progression}) => {
  const chordProgression = progression.map(chord => {
    return <Chord name={chord}/>
  })
  return (
    <div className="Progression">
      <h1>Progression</h1>
      { chordProgression }
    </div>
  );
}

export default Progression;