import React from 'react';
import './Saved.css';
import {Link} from 'react-router-dom'

const SavedSong = ({ lyrics, progression, showSavedSong }) => {
  if(lyrics && progression){
    return (
      <div className="SavedSong">
        <p>{lyrics.title}</p>
        <p>{progression}</p>
        <Link to="/">
          <button onClick={() => showSavedSong(lyrics, progression)}>Show Song</button>
        </Link>
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