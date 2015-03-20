var dbConfig = {
    host     : '127.0.0.1',
    user     : 'developer',
    password : 'password',
    database : 'bookshelf',
    charset  : 'utf8'
}

var knex = require('knex')({
   client: 'pg',
   connection: dbConfig
})

module.exports.Knex = knex
