"use strict";
module.exports = {
  "development": {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    port: "3306",
    dialect: "mysql",
  },
  "test": {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    port: "3306",
    dialect: "mysql",
    logging: false,
  },
  "production": {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    port: "3306",
    dialect: "mysql",
    dialectOptions: {
      ssl: true,
    },
  }
}
