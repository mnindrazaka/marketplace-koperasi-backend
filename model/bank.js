const modelBase = require('../bookshelf')
const Joi = require('joi')

const Bank = modelBase.extend({
  idAttribute: 'id_bank',
  tableName: 'bank',
  hasTimestamps: false,
  validate: {
    nama: Joi.string()
  }
})

module.exports = Bank