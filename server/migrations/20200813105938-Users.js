"use strict";

try {
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("todo", {
        todo_id: { type: Sequelize.INTEGER },
        description: { type: Sequelize.STRING },
      });
    },

    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable("todo");
    },
  };
} catch (err) {
  console.log(err);
}
