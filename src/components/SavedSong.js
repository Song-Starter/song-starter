import React from 'react';
import './Saved.css';

const SavedSong = ({ lyrics, progression, showSavedSong }) => {
  if(lyrics && progression){
    return (
      <div className="SavedSong">
        <p>{lyrics.title}</p>
        <p>{progression}</p>
        <button onClick={() => showSavedSong(lyrics, progression)}>Show Song</button>
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