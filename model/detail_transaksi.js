const modelBase = require('../bookshelf')
const Joi = require('joi')
const produk = require('./produk')
const transaksi = require('./transaksi')

const Detail_transaksi = modelBase.extend({
  idAttribute: 'id_detail_transaksi',
  tableName: 'detail_transaksi',
  hasTimestamps: false,
  produk: function () {
    return this.belongsTo(produk, 'id_produk')
  },
  transaksi: function () {
    return this.belongsTo(transaksi, 'id_transaksi')
  },
  validate: {
    id_produk: Joi.number(),
    id_transaksi: Joi.number(),
    jumlah: Joi.number(),
    subtotal: Joi.number()
  }
})

module.exports = Detail_transaksi