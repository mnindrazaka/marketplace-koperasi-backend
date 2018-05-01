const express = require('express')
const router = express.Router()
const bank = require('../controller/bank')

router.get('/', bank.index)
router.get('/:id', bank.show)
router.post('/', bank.store)
router.put('/:id', bank.update)
router.delete('/:id', bank.destroy)

module.exports = router