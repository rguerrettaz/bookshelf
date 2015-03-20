 var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'developer',
        password : 'password',
        database : 'bookshelf',
        charset  : 'utf8'
  }
})

var Bookshelf = require('bookshelf')(knex)

// User model
var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,

  posts: function(){
    return this.hasMany(Post)
  }
})

// Post model
var Post = Bookshelf.Model.extend({
  tableName: 'posts',
  hasTimeStamps: true,

  category: function(){
    return this.belongsTo(Category, 'category_id')
  },

  tags: function(){
    return this.belongsToMany(Tag)
  },

  author: function(){
    return this.belongsTo(User)
  }
})

// Category model
var Category = Bookshelf.Model.extend({
  tableName: 'categories',

  posts: function(){
    return this.hasMany(Post, 'category_id')
  }
})

// Tag model
var Tag = Bookshelf.Model.extend({
  tableName: 'tags',

  posts: function(){
    return this.belongsToMany(Post)
  }
})
