const express = require('express')
const router = express.Router()
const kategori = require('../controller/kategori')

router.get('/', kategori.index)
router.get('/:id', kategori.show)
router.post('/', kategori.store)
router.put('/:id', kategori.update)
router.delete('/:id', kategori.destroy)

module.exports = router