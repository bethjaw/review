const express = require('express')
const router = express.Router()
const query = require('../queries')


router.get('/', (req, res) => {
  query.getMovies()
  .then(movieData => {
    // console.log(movieData)
    res.render('index', {movieData})
  })
})


router.get('/directors', (req, res) => {
  query.moviesDirectors()
  .then(directors => {
    // console.log(directors)
    res.render('directors', {directors})
  })
})


router.get('/actors', (req, res) => {
  query.moviesActors()
    .then(actors => {
      // console.log(actors)
        res.render('actors', {actors})
      })
  })




router.post('/newmovie', (req, res) => {
  // req.body = { title: 'New Title', name: 'New Director', role: 'Director' }
  var movie = req.body.title
  var name = req.body.name
  var role = req.body.role
  query.addPerson(name, role)
    .then(peopleId => {
        query.addMovie(movie, peopleId)
        .then(newMovieId => {
          query.addJoin(newMovieId, peopleId)
          .then((allData) => {
            res.redirect('/')
          })
        })

  })
})





module.exports = router
