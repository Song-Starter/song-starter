export const postSong = (song) => {
  fetch('http://localhost:3001/api/v1/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  })
  .then(response => response.json())
  .then(data => console.log(data))
}