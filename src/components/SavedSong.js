import React from 'react';
import './Song.css';
import Lyrics from './Lyrics'
import Progression from './Progression'

const SavedSong = ({ lyrics, progression }) => {
  if(lyrics && progression){
    return (
      <div className="SavedSong">
        <h1>SavedSong</h1>
        <Lyrics lyrics={lyrics}/>
        <Progression progression={progression}/>
      </div>
    );
  }else{
    return (
      <div className="SavedSong">
        <h1>SavedSong</h1>
      </div>
    );
  }
}

export default SavedSong;