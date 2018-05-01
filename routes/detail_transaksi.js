const express = require('express')
const router = express.Router()
const detail_transaksi = require('../controller/detail_transaksi')

router.get('/', detail_transaksi.index)
router.get('/:id', detail_transaksi.show)
router.post('/', detail_transaksi.store)
router.put('/:id', detail_transaksi.update)
router.delete('/:id', detail_transaksi.destroy)

module.exports = router