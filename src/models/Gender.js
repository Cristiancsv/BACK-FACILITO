<<<<<<< HEAD
import {DataTypes} from 'sequelize';

import {sequelize} from '../db/db.js';

export const Gender = sequelize.define('genders', {
	id: {
=======
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('gender', {
    id: {
>>>>>>> 0464d230e55efaad9af5db466c84fb7add31bd4c
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
};
