import React from 'react';
import './Song.css';
import Lyrics from './Lyrics'
import Progression from './Progression'

const Song = ({ lyrics, progression, saveSong, playChord }) => {
  if(lyrics && progression){
    return (
      <div className="Song">
        <Lyrics lyrics={lyrics}/>
        <Progression 
          progression={progression}
          playChord={playChord}
        />
        <button className="save-song" onClick={saveSong}>Save Song</button>
      </div>
    );
  }else{
    return (
      <div className="Song">
        <h1>Let's get started!</h1>
        <p>Select a "Key".</p>
        <p>Choose "Major" or "Minor".</p>
        <p>Click "New Song".</p>
      </div>
    );
  }
}

export default Song;