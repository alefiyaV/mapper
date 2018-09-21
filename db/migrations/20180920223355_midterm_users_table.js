exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('midterm_users', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('password');
    })
])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('midterm_users')
    ])
  };
  