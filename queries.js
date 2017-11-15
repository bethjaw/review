const db = require('./connects')


function getMovies(){
  return db('movies').select('*')
  // .then(data => {
  //   console.log(data)
  // })
}

function moviesDirectors(){
  return db('movies').select('*').innerJoin('people', 'movies.director_id', 'people.id').returning('id')
  .then(directorData => {
    console.log('directorData', directorData)
  })
}


function moviesActors(){
  return db('movies').select('*').innerJoin('movie_people', 'movies.id', 'movie_people.movies_id').innerJoin('people', 'movie_people.people_id', 'people.id')
  // .then(actorData =>{
  //   console.log('actorData', actorData)
  // })
}





function addMovie(movie) {
  return db('movies').insert(movie).returning('*')
}

function addMovieDirector(director, role) {
  return db('people').insert(director, role).innerJoin('people', 'movies.director_id', 'people.id').returning('*')
}


module.exports = {
  getMovies,
  moviesDirectors,
  moviesActors,
  addMovie,
  addMovieDirector
}
