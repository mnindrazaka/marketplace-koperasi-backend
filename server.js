'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const kategoriRoute = require('./routes/kategori')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/kategori', kategoriRoute)
app.use((req, res) => {
  res.status(404).json({'error': 'page not found'})
})

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  console.log('Web app running at http://localhost: ' + port)
})