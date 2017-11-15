const express = require('express')
const router = express.Router()
const query = require('../queries')


router.get('/', (req, res) => {
  query.getMovies()
  .then(movieData => {
    res.render('index', {movieData})
  })
})


router.get('/directors', (req, res) => {
  query.moviesDirectors()
  .then(directors => {
    res.render('directors', {directors})
  })
})

router.get('/actors', (req, res) => {
  query.moviesActors()
  .then(actors => {
      res.render('actors', {actors})
  })
})



router.post('/newmovie', (req, res) => {
  var movie = req.body.title
  var director = req.body.name
  var role = req.body.role
  query.addMovie(movie)
  .then(newmovie => {
    query.moviesDirectors(director, role)
      .then(movieDirector => {
        res.redirect('/')
      })
  })
})

// router.post('/newdirector', (req, res) => {
//   query.addMovieDirector(req.body)
//   .then(newDir => {
//     res.redirect('/')
//   })
// })




module.exports = router
