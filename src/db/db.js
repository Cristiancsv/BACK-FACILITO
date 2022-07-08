import Sequelize from "sequelize";
import 'dotenv/config'
const {USER, PASSWORD, DB_NAME} = process.env;

export const sequelize = new Sequelize(
	/*name_database*/`${DB_NAME}`,
	/*usuario*/`${USER}`,
	/*contraseña*/`${PASSWORD}`,{
	host: 'localhost',/*donde está la database*/
    dialect: 'postgres'/*que database es*/
});


