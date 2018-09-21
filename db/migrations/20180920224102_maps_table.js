exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('maps', function(table) {
        table.increments('id').primary();
        table.string('title');
        table.string('description');
        table.integer('user_id').references('id').inTable('midterm_users').onDelete('CASCADE')
  })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('maps')
  ])
};
