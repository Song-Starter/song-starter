import React, { Component } from 'react';
import { Chord } from "tonal"
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
    console.log(Key.chords(`${key} ${majmin}`))
    // this.setState({
    //   progression: []
    // })
  }

  render(){
        console.log("this.state", this.state)
    return (
      <div className="App">
        <Header createNewSong={this.createNewSong}/>
        <Switch>
          <Route exact path="/"   
          render={() => {
          return <Song lyrics={ this.state.lyrics }/>
          }}/>
          <Route path="/poem" 
            render={() => {
            return <Poem lyrics={ this.state.lyrics }/>
          }}/>
          <Route path="/saved" component={ Saved }/>
        </Switch>
      </div>
    ); 
  }
}

export default App;
