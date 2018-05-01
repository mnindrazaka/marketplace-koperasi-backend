const express = require('express')
const router = express.Router()
const pengguna = require('../controller/pengguna')

router.get('/', pengguna.index)
router.get('/:id', pengguna.show)
router.post('/', pengguna.store)
router.put('/:id', pengguna.update)
router.delete('/:id', pengguna.destroy)

module.exports = router