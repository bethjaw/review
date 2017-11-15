
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people', (table) => {
      table.increments()
      table.string('name')
      table.string('role')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people')
  ])
};
