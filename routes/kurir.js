const express = require('express')
const router = express.Router()
const kurir = require('../controller/kurir')

router.get('/', kurir.index)
router.get('/:id', kurir.show)
router.post('/', kurir.store)
router.put('/:id', kurir.update)
router.delete('/:id', kurir.destroy)

module.exports = router