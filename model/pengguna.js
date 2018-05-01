const modelBase = require('../bookshelf')
const Joi = require('joi')
const usaha = require('./usaha')

const Pengguna = modelBase.extend({
  idAttribute: 'id_pengguna',
  tableName: 'pengguna',
  hasTimestamps: false,
  usaha: function () {
    return this.belongsTo(usaha, 'id_usaha')
  },
  validate: {
    nama: Joi.string(),
    telp: Joi.number(),
    email: Joi.string().email(),
    password: Joi.string(),
    id_usaha: Joi.number(),
    latitude: Joi.string(),
    longitude: Joi.string()
  }
})

module.exports = Pengguna