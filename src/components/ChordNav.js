import React from 'react';
import './Header.css';

const ChordNav = ({handleChange}) =>{
  return (
    <div className="ChordNav">
      <div className="seventh">
        <p>7th</p>
        <input 
          type="radio" 
          id="true" 
          name="seventh" 
          value="true"
          onChange={handleChange}/>
        <label htmlFor="true">yes</label>
        <input 
          type="radio" 
          id="false" 
          name="seventh" 
          value="false"
          onChange={handleChange}/>
        <label htmlFor="false">no</label>
      </div>
    </div>
  );
}

export default ChordNav;