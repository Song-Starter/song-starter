import React from 'react';
import './Song.css';
import {Link} from 'react-router-dom'

const Lyrics = ({ lyrics }) => {
  if(lyrics.short){
    const lyricsLines = lyrics.short.map((line, i ) => {
      return <p key={i}>{line}</p>
    })
    return (
      <div className="Lyrics">
        <div className="lyrics-display">{lyricsLines}</div>
        <div className="poetry-deets">
          <p>"{lyrics.title}" by {lyrics.author}</p>
          <Link className="full-poem-link" to="/poem" >see full poem</Link>
          <br/>
          <Link className="user-lyrics-button" to="/user-lyrics">add your own lyrics</Link>
        </div>

      </div>
    );  
  }else{
    return (
      <div className="Lyrics">
      </div>
    ); 
  }
  
}

export default Lyrics;