'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const kategoriRoute = require('./routes/kategori')
const bankRoute = require('./routes/bank')
const rekeningRoute = require('./routes/rekening')
const kurir_usahaRoute = require('./routes/kurir_usaha')
const kurirRoute = require('./routes/kurir')
const produkRoute = require('./routes/produk')
const usahaRoute = require('./routes/usaha')
const ratingRoute = require('./routes/rating')
const ulasanRoute = require('./routes/ulasan')
const detail_transaksiRoute = require('./routes/detail_transaksi')
const transaksiRoute = require('./routes/transaksi')
const penggunaRoute = require('./routes/pengguna')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/kategori', kategoriRoute)
app.use('/api/bank', bankRoute)
app.use('/api/rekening', rekeningRoute)
app.use('/api/kurir_usaha', kurir_usahaRoute)
app.use('/api/kurir', kurirRoute)
app.use('/api/produk', produkRoute)
app.use('/api/usaha', usahaRoute)
app.use('/api/rating', ratingRoute)
app.use('/api/ulasan', ulasanRoute)
app.use('/api/detail_transaksi', detail_transaksiRoute)
app.use('/api/transaksi', transaksiRoute)
app.use('/api/pengguna', penggunaRoute)

app.use((req, res) => {
  res.status(404).json({'error': 'page not found'})
})

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  console.log('Web app running at http://localhost: ' + port)
})