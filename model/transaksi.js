const modelBase = require('../bookshelf')
const Joi = require('joi')
const pengguna = require('./pengguna')

const Transaksi = modelBase.extend({
  idAttribute: 'id_transaksi',
  tableName: 'transaksi',
  hasTimestamps: false,
  pengguna: function () {
    return this.belongsTo(pengguna, 'id_pengguna')
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