const kategori = require('../model/kategori')

const controller = {
  index: (req, res) => {
    kategori.fetchAll()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json({result: false})
      })
  },

  show: (req, res) => {
    const {id} = req.params
    kategori.where({id_kategori: id})
      .fetch()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json({result: false})
      })
  },

  store: (req, res) => {
    const data = req.body
    new kategori(data)
      .save()
      .then((result) => {
        res.json({result: result.attributes})
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json({success: false})
      })
  },

  update: (req, res) => {
    const data = req.body
    const {id} = req.params
    new kategori({
      id_kategori: id,
      ...data
    })
      .save()
      .then((result) => {
        res.json({result: result.attributes})
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json({success: false})
      })
  },

  destroy: (req, res) => {
    const {id} = req.params
    new kategori({id_kategori: id})
      .destroy()
      .then(() => {
        res.json({success: true})
      })
      .catch(() => {
        res.status(500).json({success: false})
      })
  }
}

module.exports = controller