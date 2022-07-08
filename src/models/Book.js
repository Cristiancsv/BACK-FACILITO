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
