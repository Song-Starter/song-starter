import React from 'react';
import './Poem.css';

const Poem = ({lyrics}) => {
  if(lyrics){
    const fullPoem = lyrics.full.map((line, i )=> {
      return <p key={i}>{line}</p>
    })
    return (
      <div className="Lyrics">
        <div className="lyric-display">{fullPoem}</div>
        <p>"{lyrics.title}" by {lyrics.author}</p>
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