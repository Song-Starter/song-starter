import React from 'react';
import { Chord } from "tonal"
import * as Key from "tonal-key";
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Song from './Song'
import Poem from './Poem'
import Saved from './Saved'

function App() {
  const keyChords = Key.chords("C major")
  return (
    <div className="App">
      <h1>{keyChords}</h1>
      <Switch>
        <Route path="/" component={ Song }/>
        <Route path="/poem" component={ Poem }/>
        <Route path="/saved" component={ Saved }/>
      </Switch>
    </div>
  );
}

export default App;
