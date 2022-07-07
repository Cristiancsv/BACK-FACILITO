import Sequelize from "sequelize";






export const sequelize = new Sequelize(
	/*name_database*/'facilito',
	/*usuario*/'postgres',
	/*contraseña*/'1234',{
	host: 'localhost',/*donde está la database*/
    dialect: 'postgres'/*que database es*/
});


