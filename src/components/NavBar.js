import React, { Component } from 'react';
import './Header.css';
import ChordNav from './ChordNav'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: "C",
      majmin: "Major",
      seventh: false
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render(){
    return (
      <div className="NavBar">
        <div className="key-container">
          <label htmlFor="key">Select a Key</label>
          <select name="key" id="key" onChange={this.handleChange}>
            <option value="C">C</option>
            <option value="Db">C#/Db</option>
            <option value="D">D</option>
            <option value="Eb">D#/Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="F#">F#/Gb</option>
            <option value="G">G</option>
            <option value="Ab">G#/Ab</option>
            <option value="A">A</option>
            <option value="Bb">A#/Bb</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="qual-container">
        <input 
          type="radio" 
          id="major" 
          name="majmin" 
          value="major"
          onChange={this.handleChange}/>
        <label htmlFor="major">Major</label>
        <input 
          type="radio" 
          id="minor" 
          name="majmin" 
          value="minor"
          onChange={this.handleChange}/>
        <label htmlFor="minor">Minor</label>
        </div><br/>
        <button 
          onClick={() => this.props.createNewSong(this.state.key, this.state.majmin, this.state.seventh, this.state.octave)}>
          New Song
        </button>
        <ChordNav handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default NavBar;