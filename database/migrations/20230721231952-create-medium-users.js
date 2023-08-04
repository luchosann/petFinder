'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medium_users', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      lastName: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      userName: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: true,
      },
      email: {
          type: Sequelize.STRING(128),
          allowNull: false,
          unique: true,
      },
      password: {
          type: Sequelize.STRING(64),
          allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      role: {
        type: Sequelize.TEXT,
        defaultValue: 'user',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medium_users');
  }
};