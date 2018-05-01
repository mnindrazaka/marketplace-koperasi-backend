const modelBase = require('../bookshelf')
const Joi = require('joi')
const produk = require('./produk')

const Kategori = modelBase.extend({
  idAttribute: 'id_kategori',
  tableName: 'kategori',
  hasTimestamps: false,
  produk: function () {
    return this.hasMany(produk, 'id_kategori')
  },
  validate: {
    nama: Joi.string().alphanum()
  }
})

module.exports = Kategori