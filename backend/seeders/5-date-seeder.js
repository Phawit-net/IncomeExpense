'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dates', [
      {
        id: 1,
        published_date: '2020-03-12',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        id: 2,
        published_date: '2020-03-25',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2
      }
    ], {});
  },

};
