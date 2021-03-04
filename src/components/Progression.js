import React from 'react';
import './Song.css';
import Chord from './Chord'

const Progression = ({progression}) => {
  const chordProgression = progression[0].map((chord, i) => {
    return <Chord key={i} name={chord}/>
  })
  return (
    <div className="Progression">
      { chordProgression }
    </div>
  );
}

export default Progression;