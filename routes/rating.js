const express = require('express')
const router = express.Router()
const rating = require('../controller/rating')

router.get('/', rating.index)
router.get('/:id', rating.show)
router.post('/', rating.store)
router.put('/:id', rating.update)
router.delete('/:id', rating.destroy)

module.exports = router