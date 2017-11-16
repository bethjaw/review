const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const routes = require('./routes/router')
const apiroutes = require('./routes/apiroutes')


app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/', routes)
app.use('/api', apiroutes)





app.listen(port, (req, res) => {
  console.log("listeningggg", port)
})
