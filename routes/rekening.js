const express = require('express')
const router = express.Router()
const rekening = require('../controller/rekening')

router.get('/', rekening.index)
router.get('/:id', rekening.show)
router.post('/', rekening.store)
router.put('/:id', rekening.update)
router.delete('/:id', rekening.destroy)

module.exports = router