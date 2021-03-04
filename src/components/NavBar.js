import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <button onClick={() => props.createNewSong()}>New Song</button>
      <label for="key-signature">Select a Key</label>
      <select name="key-signature" id="key-signature">
        <option value="C">C</option>
        <option value="C#/Db">C#/Db</option>
        <option value="D">D</option>
        <option value="D#/Eb">D#/Eb</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#/Gb">F#/Gb</option>
        <option value="G">G</option>
        <option value="G#/Ab">G#/Ab</option>
        <option value="A">A</option>
        <option value="A#/Bb">A#/Bb</option>
        <option value="B">B</option>
      </select>
      <input 
        type="radio" 
        id="major" 
        name="majmin" 
        value="major"/>
      <label for="major">Major</label>
      <input 
        type="radio" 
        id="minor" 
        name="majmin" 
        value="minor"/>
      <label for="minor">Minor</label><br/>
      <Link to="./saved">Saved</Link>
    </div>
  );
}

export default NavBar;