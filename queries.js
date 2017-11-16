const db = require('./connects')


function getMovies(){
  return db('movies').select('*')

}

function moviesDirectors(){
return db('movies').select('*').innerJoin('people', 'movies.director_id', 'people.id').returning('id')

}


function moviesActors(){
  return db('movies').select('*').innerJoin('movie_people', 'movies.id', 'movie_people.movies_id').innerJoin('people', 'movie_people.people_id', 'people.id')
}


function addPerson(name, role){
  return db('people').select('*').where('name', name).first()
  .then(peopleData => {
    if (peopleData === undefined){
        return db('people')
        .insert({'name': name,'role': role})
          .returning('id')
    } else {
      return peopleData.id
    }
  })
}

function addMovie(title) {
  return db('movies').select('*').where('title', title).first()
  .then(newMovie => {
    if(newMovie === undefined) {
      return db('movies')
      .insert({'title': title})
      .returning('id')
    } else {
      return newMovie.id
    }
  })

}


function addJoin(peopleId, newMovieId){
  return db('movie_people').select('*')
  .then(moviepeople => {
    if(moviepeople === undefined){
      return db('movie_people').insert({movies_id: newMovieId, people_id: peopleId})
    } else {
      console.log('query', moviepeople)
      // return moviepeople.id
    }
  })
}



module.exports = {
  getMovies,
  moviesDirectors,
  moviesActors,
  addPerson,
  addMovie,
  addJoin
}
