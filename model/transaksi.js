const modelBase = require('../bookshelf')
const Joi = require('joi')
const pengguna = require('./pengguna')
const kurir = require('./kurir')

const Transaksi = modelBase.extend({
  idAttribute: 'id_transaksi',
  tableName: 'transaksi',
  pengguna: function () {
    return this.belongsTo(pengguna, 'id_pengguna')
  },
  kurir: function () {
    return this.belongsTo(kurir, 'id_kurir')
  },
  validate: {
    total_bayar: Joi.number(),
    id_pengguna: Joi.number(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    status: Joi.bool(),
    bukti: Joi.string(),
    total_berat: Joi.number(),
    id_kurir: Joi.number(),
    ongkir: Joi.number()
  }
})

module.exports = Transaksi