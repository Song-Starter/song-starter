import { Howler, howl } from 'howler';

const sound = new howl ({
  src: ['../sound/pianosprite.mp3'],
  onload() {
    soundEngine.init();
  }
})

const soundEngine = {
  init() {
    const noteLength = 2400;
    let timeIndex = 0;
    for (let i = 24; i <= 96; i++) {
      sound['_sprite'][i] = [timeIndex, noteLength];
      timeIndex += noteLength
    }
    sound.play('69')
  },
  play(selectedChord) {
    console.log(selectedChord)
  }
}