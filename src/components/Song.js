import React from 'react';
import './Song.css';
import Lyrics from './Lyrics'
import Progression from './Progression'

const Song = () => {
  return (
    <div className="Song">
      <h1>Song</h1>
      <Lyrics />
      <Progression />
    </div>
  );
}

export default Song;