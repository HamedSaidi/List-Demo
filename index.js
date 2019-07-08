const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')

// dummy data
var data = require('./data')

app.use(cors())

// hide powered by express
app.disable('x-powered-by')

const port = process.env.PORT || 3000

// start the server
app.listen(port)


// server rendered home page
app.get('/', (req, res) => {
  const per = parseInt(req.query.per, 10)
  const page = parseInt(req.query.page, 10)
  if (per > 0 && page > 0) {
    res.send({'data': data.slice((page -1) * per, per * page), pagination: {totalItems: data.length, per, page}})
  } else {
    res.send({'data': data.slice(0, 10)})
  }
})
