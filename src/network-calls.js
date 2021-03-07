export const fetchPoem = () => {
  return fetch('https://poetrydb.org/random/1/title,lines,author')
    .then(response => response.json())
    .then(data => {  
      return {title: data[0].title,
      author: data[0].author,
      short: [data[0].lines[0], data[0].lines[1], data[0].lines[2], data[0].lines[3],],
      full: data[0].lines}})
    .catch(error => {return error.status})
}

