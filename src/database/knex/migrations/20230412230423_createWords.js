
exports.up = knex => knex.schema.createTable("words", table => {
    table.increments("id");
    table.text("title").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("words");
