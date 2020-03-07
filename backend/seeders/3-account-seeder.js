'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('account', [
      {
        id: 1,
        name: 'Cash',
      },
      {
        id: 2,
        name: 'KBank',
      },
      {
        id: 3,
        name: 'SCB',
      }
    ], {});
  },

};
