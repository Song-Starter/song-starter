export const fetchPoem = () => {
  fetch('https://poetrydb.org/random/1/title,lines,author')
    .then(response => response.json())
    .then(data => {return data[0]})
}

// const cleanData = (data) => {
//   return {title: data.title,
//         author: data.author,
//         short: [data.lines[0], data.lines[1], data.lines[2], data.lines[3],],
//         full: data.lines}
// }