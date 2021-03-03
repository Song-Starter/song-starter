import React from 'react';
import './Song.css';
import Lyrics from './Lyrics'
import Progression from './Progression'

const Song = ({ lyrics }) => {
  return (
    <div className="Song">
      <h1>Song</h1>
      <Lyrics lyrics={lyrics}/>
      <Progression />
    </div>
  );
}

export default Song;