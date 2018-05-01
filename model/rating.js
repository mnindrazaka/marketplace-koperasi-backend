const modelBase = require('../bookshelf')
const Joi = require('joi')
const usaha = require('./usaha')
const pengguna = require('./pengguna')

const Rating = modelBase.extend({
  idAttribute: 'id_rating',
  tableName: 'rating',
  hasTimestamps: false,
  usaha: function () {
    return this.belongsTo(usaha, 'id_usaha')
  },
  pengguna: function () {
    return this.belongsTo(pengguna, 'id_pengguna')
  },
  validate: {
    rating: Joi.number(),
    keterangan: Joi.string(),
    id_usaha: Joi.number(),
    id_pengguna: Joi.number(),
  }
})

module.exports = Rating