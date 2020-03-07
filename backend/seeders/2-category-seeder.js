'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('categories', [
			{
				id: 1,
				name: 'Salary',
				type_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: 'Allowance',
				type_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				name: 'Transfer Payment',
				type_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				name: 'Food',
				type_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				name: 'Transport',
				type_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 6,
				name: 'Deposit',
				type_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		], {});
	},

};
