import { cleanup } from "@testing-library/react"

export const getPoem = () => {
  fetch('https://poetrydb.org/random/1/title,lines,author')
    .then(response => response.json())
    .then(data => console.log(data[0]))
}

const cleanData = (data) => {
  const title = data.title
  const author = data.author
  const short = data.lines
  const full = data.lines
  return {title, author, short, full}
}