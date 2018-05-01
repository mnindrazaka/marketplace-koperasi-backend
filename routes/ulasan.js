const express = require('express')
const router = express.Router()
const ulasan = require('../controller/ulasan')

router.get('/', ulasan.index)
router.get('/:id', ulasan.show)
router.post('/', ulasan.store)
router.put('/:id', ulasan.update)
router.delete('/:id', ulasan.destroy)

module.exports = router