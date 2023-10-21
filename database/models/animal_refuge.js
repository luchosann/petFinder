/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_animal_refuge = (sequelize, Types) => {
  class animal_refuge extends Model {}
  animal_refuge.init(
    {
      refuge_name: DataTypes.STRING,
      refuge_code: DataTypes.STRING,
      titular_name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'animal_refuge'
    }
  );

  return animal_refuge;
};


export default init_animal_refuge(connection, DataTypes);

