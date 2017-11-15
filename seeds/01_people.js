
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          // id: 1,
          name: 'Gore Verbinski',
          role: 'Director'
        },
        {
          // id: 2,
          name: 'Johnny Depp',
          role: 'Actor'
        },
        {
          // id: 3,
          name: 'David Yates',
          role: 'Director'
        },
        {
          // id: 4,
          name: 'Emma Watson',
          role: 'Actor'
        },
        {
          // id: 5,
          name: 'Richard Curtis',
          role: 'Director'
        },
        {
          // id: 6,
          name: 'Hugh Grant',
          role: 'Actor'
        }
      ]);
    });
};
