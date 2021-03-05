import React from 'react';
import './Saved.css';
import {Link} from 'react-router-dom'

const SavedSong = ({ lyrics, progression, showSavedSong, deleteSong, id }) => {
  if(lyrics && progression){
    const previewChords = progression[0].map(chord => {
      return <p>{chord}</p>
    })
    return (
      <div className="SavedSong">
        <p className="preview-title">{lyrics.title}</p>
        <div className="preview-chords">{previewChords}</div>
        <Link to="/">
          <button className="showsong-button" onClick={() => showSavedSong(lyrics, progression)}>Show Song</button>
        </Link>
        <button onClick={()=>deleteSong(id)}>X</button>
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