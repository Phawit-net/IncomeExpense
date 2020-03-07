'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dates', [
      {
        id: 1,
        published_date: '2008-11-11',
        order_id:1
      },
      {
        id: 2,
        published_date: '2008-11-11',
        order_id:2
      },
      {
        id: 3,
        published_date:'2008-11-12',
        order_id:3
      },
      {
        id: 4,
        published_date:'2008-11-12',
        order_id:4
      }
    ], {});
  },

};
