/**
 * Criação de tabelas
 */
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function(table) {
      table.increments();
  
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.decimal("value").notNullable();
  
      table.string("ong_id").notNullable();
  
      table
        .foreign("ong_id")
        .references("id")
        .inTable("ongs");
    });
  };
  
/**
 * Deletar tabelas
 */
  exports.down = function(knex) {
    return knex.schema.dropTable("incidents");
  };


/**
 * npx knex migrate:make nome_da_tabela
 * npx knex migrate:latest
 */

