'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dates', [
      {
        id: 1,
        published_date: '2008-11-11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        published_date: '2008-11-11',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

};
