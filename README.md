# Song-Starter

Hate starting new songs? Get started!

Starting a new song can be hard. Your lyrics feel uninspired. You keep falling into the same chord progressions. It's too hard to be original. Let the app do the work for you.

MVP
- User clicks a button and sees a set of four random chords, and four lines of poetry.
- User can save chord/poem sets as "song".


APIs and Libraries
- Tonal.js: Key and Chords modules. [Tonaljs](https://github.com/tonaljs/v2)
- PoetryDB: Search call, 'random' and 'linecount'. Possibly 'lines' to allow users to input search term. [PoetryDB](https://github.com/thundercomb/poetrydb/blob/master/README.md)
- Howler.js: Howl and Howler objects to play audio. Functions: play, pause, and possibly loop, duration.[Howler.js](https://github.com/goldfire/howler.js#documentation)
- Web Audio API: Functions: play, pause, stop.

Extensions:
- User find poetry containing certain word.
- User can play chords by clicking them.
- User can set tempo for chords to play.
- User can choose to have chords play once, twice, or four times per measure.
- Service worker to cache sound files, speed up loading.
- User can add their own lyrics.

Inspiration:
- As a teacher I worked with students who wanted to become song writers, but believed they couldn't because they hadn't done it already.
- As a musician I have gone long periods without writing because I didn't feel inspired.
- As a collaborator, I have worked with musicians who were too worried their songs weren't good because they thought they felt uninspired.
