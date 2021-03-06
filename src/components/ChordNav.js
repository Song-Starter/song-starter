import React from 'react';
import './Header.css';

const ChordNav = ({handleChange}) =>{
  return (
    <div className="ChordNav">
      <div className="octave-selector">
        <label htmlFor="octave">Octave</label>
        <input 
          type="number"
          name="octave" 
          id="octave" 
          min="0"
          max="6"
          value="3"
          onChange={handleChange}>
        </input>
      </div>
      <div className="seventh">
        <p>Sevenths</p>
        <input 
          type="radio" 
          id="true" 
          name="chordValue" 
          value="true"
          onChange={handleChange}/>
        <label htmlFor="true">yes</label>
        <input 
          type="radio" 
          id="false" 
          name="chordValue" 
          value="false"
          onChange={handleChange}/>
        <label htmlFor="false">no</label>
      </div>
    </div>
  );
}

export default ChordNav;