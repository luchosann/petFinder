"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "medium_users",
      [
        {
          firstName: "Prueba",
          lastName: "1",
          userName: "prueba 1",
          email: "prueba@local.local",
          password: "1234",
          role: 'admin',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Lucaino",
          lastName: "Gabrielli",
          userName: "Luchosann",
          email: "lucianogabrielli67@gmail.com",
          password: "dificlMuyDificl",
          role: 'admin',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};