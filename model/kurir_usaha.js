const modelBase = require('../bookshelf')
const Joi = require('joi')
const kurir = require('./kurir')
const usaha = require('./usaha')

const Kurir_usaha = modelBase.extend({
  idAttribute: 'id_kurir_usaha',
  tableName: 'kurir_usaha',
  hasTimestamps: false,
  kurir: function () {
    return this.belongsTo(kurir, 'id_kurir')
  },
  usaha: function () {
    return this.belongsTo(usaha, 'id_usaha')
  },
  validate: {
    id_usaha: Joi.number(),
    id_kurir: Joi.number()
  }
})

module.exports = Kurir_usaha