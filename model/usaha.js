const modelBase = require('../bookshelf')
const Joi = require('joi')

const Usaha = modelBase.extend({
  idAttribute: 'id_usaha',
  tableName: 'usaha',
  hasTimestamps: false,
  validate: {
    nama: Joi.string(),
    slogan: Joi.string(),
    deskripsi: Joi.string(),
    logo: Joi.string(),
    telp: Joi.number(),
    latitude: Joi.string(),
    longitude: Joi.string(),
  }
})

module.exports = Usaha