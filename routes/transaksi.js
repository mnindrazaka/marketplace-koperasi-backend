const express = require('express')
const router = express.Router()
const transaksi = require('../controller/transaksi')

router.get('/', transaksi.index)
router.get('/:id', transaksi.show)
router.post('/', transaksi.store)
router.put('/:id', transaksi.update)
router.delete('/:id', transaksi.destroy)

module.exports = router