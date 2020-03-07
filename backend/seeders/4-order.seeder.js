'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        id: 1,
        description: 'ข้าว7',
        amount: 78,
        category_id:4,
        account_id:1
      },
      {
        id: 2,
        name: 'วินมอไซ',
        amount: 25,
        category_id:5,
        account_id:1
      },
      {
        id: 3,
        name: 'ฝากเงิน',
        amount: 1500,
        category_id:6,
        account_id:2
      },
      {
        id: 4,
        name: 'เงินโอน',
        amount: 1000,
        category_id:1,
        account_id:3
      }
    ], {});
  },

};
