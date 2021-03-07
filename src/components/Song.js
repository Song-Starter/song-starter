import React from 'react';
import './Song.css';
import Lyrics from './Lyrics'
import Progression from './Progression'
import Error from './Error'

const Song = ({ lyrics, progression, saveSong, playChord }) => {
  console.log(lyrics)
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
  }else if (lyrics === undefined) {
    return <Error />
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