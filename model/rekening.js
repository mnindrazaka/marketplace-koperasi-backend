const modelBase = require('../bookshelf')
const Joi = require('joi')
const usaha = require('./usaha')
const bank = require('./bank')

const Rekening = modelBase.extend({
  idAttribute: 'id_rekening',
  tableName: 'rekening',
  hasTimestamps: false,
  usaha: function () {
    return this.belongsTo(usaha, 'id_usaha')
  },
  bank: function () {
    return this.belongsTo(bank, 'id_bank')
  },
  validate: {
    nama: Joi.string(),
    no: Joi.number(),
    id_usaha: Joi.number(),
    id_bank: Joi.number(),
  }
})

module.exports = Rekening