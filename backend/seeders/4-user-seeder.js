'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [
      {
        id:1,
        username:'aishaza',
        password:'$2a$12$nwHxhkPWioqltUhcJlUcSOX10BGrBcNEO5ILYf3v3Ng0NGycaInVy',
        email:'neztle_net@hotmail.com',
        avatar:'/image/avatar/boy-16.png',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        username:'zaqwsx',
        password:'$2a$12$6zIbg15cA/1tli45vnKseeSUBifV6je0XW/kbl6u5eVntQtF.Dt.G',
        email:'zaqwsx_net@hotmail.com',
        avatar:'/image/avatar/boy-14.png',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

};
