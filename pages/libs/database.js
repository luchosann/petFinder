import { config } from "dotenv";
import { Sequelize, DataTypes } from 'sequelize';


config();

const sequelize = new Sequelize(process.env.MYSQLDB_DATABASE, process.env.MYSQLDB_USER, process.env.MYSQLDB_PASSWORD, {
    port: "3306",
    host: process.env.MYSQLDB_HOST,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// (async () => {
//   await sequelize.sync({ force: false });
// })();

export default sequelize;