import React from 'react';
import './Saved.css';
import SavedSong from './SavedSong'

const Saved = ({ savedArray }) => {
  if (savedArray.length) {
      const songsToRender = savedArray.map(song => {
      return <SavedSong lyrics={song.lyrics} progression={song.progression}/>})
    return (
      <div className="Saved">
        { songsToRender }
      </div>
    );
  } else {
    return(
      <div className="Saved">
        <h1>No</h1>
        <h1>Saved</h1>
        <h1>Songs</h1>
      </div>
    )
  }

}

export default Saved;