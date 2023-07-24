/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_medium_users = (sequelize, Types) => {
  class medium_users extends Model {}
  medium_users.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING(64),
      email: DataTypes.STRING(128),
      password: DataTypes.STRING(64),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "medium_users",
    }
  );

  return medium_users;
};

export default init_medium_users(connection, DataTypes);