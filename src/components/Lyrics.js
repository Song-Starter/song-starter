import React, { useState }  from 'react';
import './Song.css';
import { getPoem } from '../network-calls'

const Lyrics = () => {
  const [poem, setPoem] = useState({title, author, short, full});
  console.log(getPoem())
  return (
    <div className="Lyrics">
      <h1>Lyrics</h1>
    </div>
  );
}

export default Lyrics;