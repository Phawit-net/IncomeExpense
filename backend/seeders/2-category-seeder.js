'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('categories', [
			{
				id: 1,
				name: 'Salary',
				type_id: 1
			},
			{
				id: 2,
				name: 'Allowance',
				type_id: 1
			},
			{
				id: 3,
				name: 'Transfer Payment',
				type_id: 1
			},
			{
				id: 4,
				name: 'Food',
				type_id: 2
			},
			{
				id: 5,
				name: 'Transport',
				type_id: 2
			},
			{
				id: 6,
				name: 'Deposit',
				type_id: 2
			}
		], {});
	},

};
