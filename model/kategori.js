const bookshelf = require('../bookshelf')

const Kategori = bookshelf.Model.extend({
  idAttribute: 'id_kategori',
  tableName: 'kategori'
})

module.exports = bookshelf.model('Kategori', Kategori)