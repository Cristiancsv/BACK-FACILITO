import {DataTypes} from 'sequelize';

import {sequelize} from '../db/db.js'



export const Book = sequelize.define('books',{
	id : {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	
	title : {
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


