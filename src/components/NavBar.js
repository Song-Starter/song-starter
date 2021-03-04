import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: "",
      majmin: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render(){
    console.log(this.state)
    return (
      <div className="NavBar">
        <label htmlFor="key">Select a Key</label>
        <select name="key" id="key" onChange={this.handleChange}>
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
        <button onClick={() => this.props.createNewSong()}>New Song</button><br/>
        <Link to="./saved">Saved</Link>
      </div>
    );
  }
}

export default NavBar;