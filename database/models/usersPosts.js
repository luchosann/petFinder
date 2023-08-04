'use strict';
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import { medium_users } from './medium_users';

const init_users_posts = (sequelize, Types) => {
  class usersPosts extends Model {
    static associate(models) {
      UsersPosts.belongsTo( medium_users, { foreignKey: 'user_id', as: 'medium_users' }); // usersPosts pertenece a un usuario
    }
  }
  usersPosts.init(
    {
      name: DataTypes.STRING,
      description:DataTypes.TEXT,
      petType:DataTypes.TEXT,
      location:DataTypes.TEXT,
      gender:DataTypes.TEXT,
      size:DataTypes.TEXT,
      dewormed:DataTypes.BOOLEAN,
      vaccinated:DataTypes.BOOLEAN,
      chip:DataTypes.BOOLEAN,
      sterilized:DataTypes.BOOLEAN,
      img1: DataTypes.TEXT,
      img2: DataTypes.TEXT,
      img3: DataTypes.TEXT,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'medium_users', 
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'usersPosts',
    }
  );

  return usersPosts;
}

export default init_users_posts(connection, DataTypes);