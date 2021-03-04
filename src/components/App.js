import React, { Component } from 'react';
// import { Chord } from "tonal"
import * as Key from "tonal-key";
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Song from './Song'
import Poem from './Poem'
import Saved from './Saved'
import Header from './Header'
import { fetchPoem } from '../network-calls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      key: "",
      majmin: "",
      lyrics: "",
      progression: [],
      saved: []
    }
  }

  createNewSong = (key, majmin) => {
    fetchPoem()
    .then(data => this.setState({
      key: key,
      majmin: majmin,
      lyrics: data,
      })
    )
    this.getChordProgression(key, majmin)
  }

  getChordProgression = (key, majmin) => {
    const songKey = Key.triads(`${key} ${majmin}`)
    let chordArray = []
    chordArray.push(songKey[0])
    for(let i = 0; i < 3; i++) {
      chordArray.push(songKey[Math.floor(Math.random() * 6)])
    }
    this.setState({
      progression: [chordArray]
    })
  }

  saveSong = () => {
    const songObj = {
      lyrics: this.state.lyrics,
      progression: this.state.progression
    }
    this.setState({
      saved: [...this.state.saved, songObj]
    })
  }

  render(){
    return (
      <div className="App">
        <Header createNewSong={this.createNewSong}/>
        <Switch>
          <Route exact path="/"   
          render={() => {
          return <Song lyrics={ this.state.lyrics } progression={ this.state.progression }/>
          }}/>
          <Route path="/poem" 
            render={() => {
            return <Poem lyrics={ this.state.lyrics }/>
          }}/>
          <Route path="/saved"
            render={() => {
              return <Saved savedArray={ this.state.saved }/>
          }}/>
        </Switch>
      </div>
    ); 
  }
}

export default App;
