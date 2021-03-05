import { Howl } from 'howler';
import { note } from 'tonal';
import piano from './pianosprite.mp3'


export const sound = new Howl ({
  src: [piano],
  onload() {
    soundEngine.init();
  },
  onloaderror(e, msg){
    console.log("NO SOUND", e, msg)
  }
})

export const soundEngine = {
  init() {
    const noteLength = 2400;
    let timeIndex = 0;
    for (let i = 24; i <= 96; i++) {
      sound['_sprite'][i] = [timeIndex, noteLength];
      timeIndex += noteLength
    }
  },
  play(selectedChord) {
    sound.volume(0.6)
    const chordMidiNums = selectedChord.map(noteName => {
      return note(noteName+"3").midi;
    })

    chordMidiNums.forEach(midiNum => {
      sound.play(midiNum.toString())
    })
  }