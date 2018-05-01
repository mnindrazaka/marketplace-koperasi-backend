const express = require('express')
const router = express.Router()
const produk = require('../controller/produk')

router.get('/', produk.index)
router.get('/:id', produk.show)
router.post('/', produk.store)
router.put('/:id', produk.update)
router.delete('/:id', produk.destroy)

module.exports = router