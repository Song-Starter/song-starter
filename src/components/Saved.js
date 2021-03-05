import React from 'react';
import './Saved.css';
import SavedSong from './SavedSong'

const Saved = ({ savedArray, showSavedSong, deleteSong }) => {
  if (savedArray.length) {
      const songsToRender = savedArray.map((song, i)=> {
      return <SavedSong 
        key={i} 
        id={i}
        lyrics={song.lyrics} 
        progression={song.progression} 
        showSavedSong={showSavedSong} 
        deleteSong={deleteSong}/>})
    return (
      <div className="Saved">
        { songsToRender }
      </div>
    );
  } else {
    return(
      <div className="Saved">
        <div></div>
        <h1>No Saved Songs</h1>
        <div></div>
      </div>
    )
  }

}

export default Saved;