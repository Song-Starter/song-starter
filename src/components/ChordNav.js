import React, { Component } from 'react';
import './Header.css';

class ChordNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      octave: "4",
      seventh: "triad"
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render(){
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
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="seventh">
          <input 
            type="radio" 
            id="triad" 
            name="chordType" 
            value="triad"
            onChange={this.handleChange}/>
          <label htmlFor="triad">Triads</label>
          <input 
            type="radio" 
            id="seventh" 
            name="chordType" 
            value="seventh"
            onChange={this.handleChange}/>
          <label htmlFor="seventh">Sevenths</label>
        </div>
      </div>
    );
  }
}

export default ChordNav;