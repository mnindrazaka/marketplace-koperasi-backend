const detail_transaksi = require('../model/detail_transaksi')

const controller = {
  index: async (req, res) => {
    try {
      let result = await detail_transaksi.findAll({}, {withRelated: ['produk', 'transaksi']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  show: async (req, res) => {
    const {id} = req.params
    try {
      let result = await detail_transaksi.findById(id, {withRelated: ['produk', 'transaksi']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  store: async (req, res) => {
    const data = req.body
    try {
      let result = await detail_transaksi.create(data)
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
      let result = await detail_transaksi.update(data, {id})
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({err: err.details})
    }
  },

  destroy: async (req, res) => {
    const {id} = req.params
    try {
      await detail_transaksi.destroy({id})
      res.json({success: true})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({success: false})
    }
  }
}

module.exports = controller