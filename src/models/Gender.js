import {DataTypes} from 'sequelize';

import {sequelize} from '../db/db.js'

export const Gender = sequelize.define('genders', {
	id: {
		type : DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true

	},

	name : {
		type : DataTypes.STRING
	}, 

	description : {
		type : DataTypes.STRING
	},
});