
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('movie_people', (table) => {
      table.increments()
      table.integer('movies_id').references('movies.id')
      table.integer('people_id').references('people.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('movie_people')
  ])
};
