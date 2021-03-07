import React, { Component } from 'react';
import './Song.css';
import {Link} from 'react-router-dom'

class UserLyrics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      poem: "",
      full: [],
      short: "",
      author: "You"
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
    this.updateShortPoem()
    this.updateFullPoem()
  }

  updateShortPoem = () => {
    const shortPoem = this.state.poem.match(/[^\r\n]+/g)
    if(shortPoem && shortPoem.length < 5){
      this.setState({
        short: shortPoem
      })
    }
  }

  updateFullPoem = () => {
    const fullPoem = this.state.poem.match(/[^\r\n]+/g)
    if(fullPoem){
      this.setState({
        full: fullPoem
      })
    }
  }


  render() {
    return (
      <div className="UserLyrics Lyrics">
        <h1>Add Your Lyrics</h1>
        <Link to="/" className="back-song">or go back...</Link>
        <label htmlFor="user-title">Title</label>
        <input 
          type="text" 
          placeholder="Song Title"
          id="user-title" 
          name="title" 
          value={this.state.title}
          onChange={this.handleChange}/>
        <label htmlFor="user-lyrics">Lyrics</label>
        <textarea 
          placeholder="Song lyrics..."
          id="user-lyrics" 
          name="poem"
          rows="20"
          cols="5" 
          value={this.state.lyrics}
          onChange={this.handleChange}/>
        <Link to="/" className="back-song">
          <button onClick={() => this.props.updateLyrics(this.state)}>Save Lyrics</button>
        </Link>
        <Link to="/" className="back-song">Back to Song</Link>
      </div>
    );  
  }
  
}

export default UserLyrics;