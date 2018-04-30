const kategori = require('../model/kategori')

const controller = {
  index: async (req, res) => {
    // kategori.fetchAll()
    //   .then(result => res.json(result))
    //   .catch(err => {
    //     console.log(err.message)
    //     res.status(500).json({result: false})
    //   })

    try {
      let result = await kategori.findAll()
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  show: async (req, res) => {
    const {id} = req.params
    // kategori.where({id_kategori: id})
    //   .fetch()
    //   .then(result => res.json(result))
    //   .catch(err => {
    //     console.log(err.message)
    //     res.status(500).json({result: false})
    //   })

    try {
      let result = await kategori.findById(id)
      res.json(result)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  store: async (req, res) => {
    const data = req.body
    // new kategori(data)
    //   .save()
    //   .then((result) => res.json({result: result.attributes}))
    //   .catch(err => {
    //     console.log(err.message)
    //     res.status(500).json({success: false})
    //   })
    try {
      let result = await kategori.create(data)
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  update: async (req, res) => {
    const data = req.body
    const {id} = req.params
    // new kategori({
    //   id_kategori: id,
    //   ...data
    // })
    //   .save()
    //   .then((result) => res.json({result: result.attributes}))
    //   .catch(err => {
    //     console.log(err.message)
    //     res.status(500).json({success: false})
    //   })
    try {
      let result = await kategori.update(data, {id})
      res.json(result.attributes)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({result: false})
    }
  },

  destroy: async (req, res) => {
    const {id} = req.params
    // new kategori({id_kategori: id})
    //   .destroy()
    //   .then(() => res.json({success: true}))
    //   .catch(() => {
    //     res.status(500).json({success: false})
    //   })
    try {
      await kategori.destroy({id})
      res.json({success: true})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({success: false})
    }
  }
}

module.exports = controller