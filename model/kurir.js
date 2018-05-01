const modelBase = require('../bookshelf')
const Joi = require('joi')

const Kurir = modelBase.extend({
  idAttribute: 'id_kurir',
  tableName: 'kurir',
  hasTimestamps: false,
  validate: {
    nama: Joi.string()
  }
})

module.exports = Kurir