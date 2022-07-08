<<<<<<< HEAD
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


=======
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('book', {
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
      type : DataTypes.STRING(2000)
    },
    
    link : {
      type : DataTypes.STRING
    },
  });
};
>>>>>>> 0464d230e55efaad9af5db466c84fb7add31bd4c
