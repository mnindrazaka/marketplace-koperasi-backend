const produk = require('../model/produk')

const controller = {
  index: async (req, res) => {
    try {
      let result = await produk.findAll({}, {withRelated: ['kategori', 'usaha']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  show: async (req, res) => {
    const {id} = req.params
    try {
      let result = await produk.findById(id, {withRelated: ['kategori', 'usaha']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  store: async (req, res) => {
    const data = req.body
    try {
      let result = await produk.create(data)
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({err: err.details})
    }
  },

  update: async (req, res) => {
    const data = req.body
    const {id} = req.params
    try {
      let result = await produk.update(data, {id})
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({err: err.details})
    }
  },

  destroy: async (req, res) => {
    const {id} = req.params
    try {
      await produk.destroy({id})
      res.json({success: true})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({success: false})
    }
  }
}

module.exports = controller