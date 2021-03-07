import React, { Component } from 'react';
import './Song.css';
import {Link} from 'react-router-dom'

class UserLyrics extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      lyrics: "",
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className="UserLyrics">
        <h1>Add Your Lyrics</h1>
        <label htmlFor="user-title">Title</label>
        <input 
          type="text" 
          id="user-title" 
          name="title" 
          value={this.state.title}
          onChange={this.handleChange}/>
        <input 
          type="text" 
          id="user-lyrics" 
          name="lyrics" 
          value={this.state.lyrics}
          onChange={this.handleChange}/>
        <button>Save Lyrics</button>
      </div>
    );  
  }
  
}

export default UserLyrics;