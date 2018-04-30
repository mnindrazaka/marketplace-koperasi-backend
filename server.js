'use strict'
require('dotenv').config()

const express = require('express')
const app = express()

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  console.log('Web app running at http://localhost: ' + port)
})