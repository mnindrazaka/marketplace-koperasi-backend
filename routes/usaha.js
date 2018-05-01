const express = require('express')
const router = express.Router()
const usaha = require('../controller/usaha')

router.get('/', usaha.index)
router.get('/:id', usaha.show)
router.post('/', usaha.store)
router.put('/:id', usaha.update)
router.delete('/:id', usaha.destroy)

module.exports = router