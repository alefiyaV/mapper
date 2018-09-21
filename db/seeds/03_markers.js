exports.seed = function(knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, title: 'Travel', description: 'Travel the world', longitude: 114.109497, latitude: 22.396427, image_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png', map_id: 1}),
        knex('markers').insert({id: 2, title: 'Food', description: 'Foodie', longitude: 180.109497, latitude: 40.396427, image_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png', map_id: 1}),
        knex('markers').insert({id: 3, title: 'Travel', description: 'Japan', longitude: 130.109497, latitude: 33.396427, image_url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png', map_id: 2})
      ]);
    });
};
