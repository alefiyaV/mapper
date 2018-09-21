exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('markers', function(table) {
        table.increments('id').primary();
        table.string('title');
        table.string('description');
        table.decimal('longitude', 14, 6);
        table.decimal('latitude', 14, 6);
        table.string('image_url');
        table.integer('map_id').references('id').inTable('maps').onDelete('CASCADE')
  })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('markers')
  ])
};
