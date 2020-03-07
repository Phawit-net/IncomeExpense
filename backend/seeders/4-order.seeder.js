'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        id: 1,
        description: 'ข้าว7',
        amount: 78,
        category_id:4,
        account_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'วินมอไซ',
        amount: 25,
        category_id:5,
        account_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'ฝากเงิน',
        amount: 1500,
        category_id:6,
        account_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        description: 'เงินโอน',
        amount: 1000,
        category_id:1,
        account_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

};
