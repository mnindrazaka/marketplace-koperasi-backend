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
      let result = await kategori.fetchAll()
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
      let result = await kategori.where({id_kategori: id}).fetch()
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
      let result = await new kategori(data).save()
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
      let result = await new kategori({id_kategori: id, ...data}).save()
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
      await new kategori({id_kategori: id}).destroy()
      res.json({success: true})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({success: false})
    }
  }
}

module.exports = controller