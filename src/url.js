import { API_KEY } from "./constants/constants"


const comedyMovies=`/discover/movie?api_key=${API_KEY}&with_genres=3`

// const horrorMovies=`/discover/movie?api_key=${API_KEY}&with_genres=27`

const actionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=28`

const romanceMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`

const documentaries=`/discover/movie?api_key=${API_KEY}&with_genres=99`

const originals=`/discover/movie?api_key=${API_KEY}&with_genres=35`
export {originals,comedyMovies,actionMovies, romanceMovies,documentaries }