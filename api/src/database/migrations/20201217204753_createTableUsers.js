exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
