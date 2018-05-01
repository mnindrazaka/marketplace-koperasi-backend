const pengguna = require('../model/pengguna')

const controller = {
  index: async (req, res) => {
    try {
      let result = await pengguna.findAll({}, {withRelated: ['usaha']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  show: async (req, res) => {
    const {id} = req.params
    try {
      let result = await pengguna.findById(id, {withRelated: ['usaha']})
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  store: async (req, res) => {
    const data = req.body
    try {
      let result = await pengguna.create(data)
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
      let result = await pengguna.update(data, {id})
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({err: err.details})
    }
  },

  destroy: async (req, res) => {
    const {id} = req.params
    try {
      await pengguna.destroy({id})
      res.json({success: true})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({success: false})
    }
  }
}

module.exports = controller