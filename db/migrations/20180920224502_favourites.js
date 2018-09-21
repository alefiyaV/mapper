exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('favourites', function(table) {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('midterm_users').onDelete('CASCADE')
        table.integer('map_id').references('id').inTable('maps').onDelete('CASCADE')
  })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favourites')
  ])
};
