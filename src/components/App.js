import React from 'react';
import { Chord } from "tonal"
import * as Key from "tonal-key";
import './App.css';

function App() {
  const keyChords = Key.chords("C major")
  return (
    <div className="App">
      <h1>{keyChords}</h1>
    </div>
  );
}

export default App;
