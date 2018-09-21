exports.seed = function(knex, Promise) {
    return knex('midterm_users').del()
      .then(function () {
        return Promise.all([
          knex('midterm_users').insert({id: 1, name: 'Alice', email: 'alice@test.com', password: 'password123'}),
          knex('midterm_users').insert({id: 2, name: 'Bob', email: 'bob@test.com', password: 'password456'}),
          knex('midterm_users').insert({id: 3, name: 'Charlie', email: 'bob@test.com', password: 'password456'})
        ]);
      });
  };
  
  
