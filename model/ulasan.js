const modelBase = require('../bookshelf')
const Joi = require('joi')
const produk = require('./produk')
const pengguna = require('./pengguna')

const Ulasan = modelBase.extend({
  idAttribute: 'id_ulasan',
  tableName: 'ulasan',
  hasTimestamps: false,
  produk: function () {
    return this.belongsTo(produk, 'id_produk')
  },
  pengguna: function () {
    return this.belongsTo(pengguna, 'id_pengguna')
  },
  validate: {
    rating: Joi.number(),
    keterangan: Joi.string(),
    id_produk: Joi.number(),
    id_pengguna: Joi.number(),
  }
})

module.exports = Ulasan