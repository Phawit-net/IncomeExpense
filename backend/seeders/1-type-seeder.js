'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('types', [
      {
        id: 1,
        name: 'Income',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Expense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Transfer',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

};
