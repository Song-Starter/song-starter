import { Howler, Howl } from 'howler';
import { note } from 'tonal';


export const sound = new Howl ({
  src: ['../sound/pianosprite.mp3'],
  onload() {
    console.log("Sound is loaded")
    soundEngine.init();
  },
  onloaderror(error, msg){
    console.log("NO SOUND", error, msg)
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
    sound.volume(0.7)
    const chordMidiNums = selectedChord.map(noteName => {
      return note(noteName+"4").midi;
    })

    chordMidiNums.forEach(midiNum => {
      console.log(midiNum)
      sound.play(midiNum.toString())
    })
  }
}