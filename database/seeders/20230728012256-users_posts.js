'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usersPosts",
      [
        {
          name: 'Lucas',
          description: 'Soy muy cariñoso, guardián, me encanta jugar y salir a pasear',
          petType: 'perro',
          age: '3',
          location: 'canelones',
          gender: 'macho',
          size: 'pequeño',
          dewormed: true,
          vaccinated: true,
          chip: false,
          sterilized: false,
          img1: '1690767980715.png',
          userName: 'prueba 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pata',
          description: 'se llama pata',
          petType: 'perro',
          age: '7',
          location: 'salto',
          gender: 'macho',
          size: 'pequeño',
          dewormed: true,
          vaccinated: true,
          chip: false,
          sterilized: false,
          img1: '1690767980715.png',
          userName: 'Luchosann',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'roberto',
          description: 'roberto no es nombre de perro',
          petType: 'perro',
          age: '10',
          location: 'montevideo',
          gender: 'macho',
          size: 'grande',
          dewormed: true,
          vaccinated: false,
          chip: true,
          sterilized: false,
          img1: '1690767980715.png',
          img2: '1690767980715.png',
          userName: 'prueba 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
