import {DataTypes} from 'sequelize';

import {sequelize} from '../db/db.js'

import {Gender} from './Gender.js'

export const Book = sequelize.define('books',{
	id : {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	
	name : {
		type: DataTypes.STRING
	},

	img : {
		type: DataTypes.STRING
	},

	description : {
		type : DataTypes.STRING
	},
	
	link : {
		type : DataTypes.STRING
	},

});


Book.hasMany(Gender, {
	foreignKey: 'bookId',
	sourceKey: 'id'
})

Gender.belongsTo(Book, {
	foreignKey: 'bookId',
	targetId: 'id'
})