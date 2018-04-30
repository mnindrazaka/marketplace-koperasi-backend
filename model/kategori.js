const modelBase = require('../bookshelf')
const Joi = require('joi')

const Kategori = modelBase.extend({
  idAttribute: 'id_kategori',
  tableName: 'kategori',
  hasTimestamps: false,
  validate: {
    nama: Joi.string().alphanum()
  }
})

module.exports = Kategori