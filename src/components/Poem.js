import React from 'react';
import './Poem.css';
import {Link} from 'react-router-dom'

const Poem = ({lyrics}) => {
  if(lyrics){
    const fullPoem = lyrics.full.map((line, i )=> {
      return <p key={i}>{line}</p>
    })
    return (
      <div className="Lyrics">
        <Link to="/">Back to Song</Link>
        <div className="lyric-display">{fullPoem}</div>
        <p>"{lyrics.title}" by {lyrics.author}</p>
        <Link to="/">Back to Song</Link>
      </div>
    );  
  }else{
    return (
      <div className="Lyrics">
      </div>
    ); 
  }
}

export default Poem;