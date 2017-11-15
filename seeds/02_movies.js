
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          // id: 1,
          title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
          director_id: 1
        },
        {
          // id: 2,
          title: 'Harry Potter and the Order of the Phoenix',
          director_id: 3
        },
        {
          // id: 3,
          title: 'Love Actually',
          director_id: 5
        }
      ]);
    });
};
