'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accounts', [
      {
        id: 1,
        name: 'Cash',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'KBank',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'SCB',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

};
