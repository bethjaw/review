
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_people').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_people').insert([
        {
          // id: 1,
          movies_id: 1,
          people_id: 2
        },

        {
          // id: 2,
          movies_id: 2,
          people_id: 4
        },

        {
          // id: 3,
          movies_id: 3,
          people_id: 6
        }
      ]);
    });
};
