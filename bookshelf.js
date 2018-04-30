const knex = require('knex') (require('./knexfile'))
const bookshelf = require('bookshelf')(knex)
const modelBase = require('bookshelf-modelbase')(bookshelf)

bookshelf.plugin(require('bookshelf-modelbase').pluggable);

module.exports = modelBase