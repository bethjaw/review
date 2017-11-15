const express = require('express')
const router = express.Router()
const query = require('../queries')



router.get('/movies', (req, res) => {
  query.getMovies()
  .then(allMovies => {
    res.json(allMovies)
  })
})

router.get('/directors', (req, res) => {
  query.movieDirectors()
  .then(directors => {
    res.json(directors)
  })
})

router.get('/actors', (req, res) => {
  query.movieActors()
  .then(actors => {
    res.json(actors)
  })
})



module.exports = router
