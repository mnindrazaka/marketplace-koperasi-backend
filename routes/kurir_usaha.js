const express = require('express')
const router = express.Router()
const kurir_usaha = require('../controller/kurir_usaha')

router.get('/', kurir_usaha.index)
router.get('/:id', kurir_usaha.show)
router.post('/', kurir_usaha.store)
router.put('/:id', kurir_usaha.update)
router.delete('/:id', kurir_usaha.destroy)

module.exports = router