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
          <Link to="/poem" >see full poem</Link>
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