import React from 'react';
import './Saved.css';
import SavedSong from './SavedSong'

const Saved = ({ savedArray }) => {
  // console.log(savedArray)
  if (savedArray) {
      console.log(savedArray)
      const songsToRender = savedArray.map(song => {
      return <SavedSong lyrics={song.lyrics} progression={song.progression}/>})
      console.log(songsToRender)
    return (
      <div className="Saved">
        { songsToRender }
      </div>
    );
  } else {
    return(
      <h1>Ain't got no songs!</h1>
    )
  }

}

export default Saved;