'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('types', [
      {
        id: 1,
        name: 'Income',
      },
      {
        id: 2,
        name: 'Expense',
      },
      {
        id: 3,
        name: 'Transfer',
      }
    ], {});
  },

};
