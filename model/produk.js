const modelBase = require('../bookshelf')
const Joi = require('joi')
const kategori = require('./kategori')
const usaha = require('./usaha')

const Produk = modelBase.extend({
  idAttribute: 'id_produk',
  tableName: 'produk',
  hasTimestamps: false,
  kategori: function () {
    return this.belongsTo(kategori, 'id_kategori')
  },
  usaha: function () {
    return this.belongsTo(usaha, 'id_usaha')
  },
  validate: {
    nama: Joi.string(),
    deskripsi: Joi.string(),
    id_usaha: Joi.number(),
    id_kategori: Joi.number(),
    foto: Joi.string(),
    harga: Joi.number(),
    status: Joi.bool(),
    satuan: Joi.string(),
    berat: Joi.number()
  }
})

module.exports = Produk