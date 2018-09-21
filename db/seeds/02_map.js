exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        knex('maps').insert({id: 1, title: 'Travel', description: 'Travel the world', user_id: 1}),
        knex('maps').insert({id: 2, title: 'Food', description: 'Foodie',  user_id: 2}),
        knex('maps').insert({id: 3, title: 'Breakfast', description: 'eggs',  user_id: 3})
      ]);
    });
};
