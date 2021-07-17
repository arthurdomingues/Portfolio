exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE contact(
      id SERIAL,
      name VARCHAR(80),
      email VARCHAR(80),
      message TEXT,
      sent DATE,
      archived BOOLEAN DEFAULT false
    );

    CREATE TABLE admin(
      id serial,
      name VARCHAR(80),
      password VARCHAR
    );
  `)
}

exports.down = function (knex) {
  return knex.raw(`
    DROP TABLE contact;
    DROP TABLE admin;
  `)
}
