const modelBase = require('../bookshelf')

const Kategori = modelBase.extend({
  idAttribute: 'id_kategori',
  tableName: 'kategori',
  hasTimestamps: false
})

module.exports = Kategori