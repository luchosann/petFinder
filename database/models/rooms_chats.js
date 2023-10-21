import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_rooms_chats = (sequelize, Types) => {
  class rooms_chats extends Model {}
  rooms_chats.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Valor predeterminado generado automáticamente
        primaryKey: true, // Establecer como clave primaria
        allowNull: false
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usersPosts', 
          key: 'id'
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_msg: {
        type: DataTypes.STRING,
        allowNull: true
      },
      User1: {
        type: DataTypes.STRING,
        references: {
          model: 'medium_users', 
          key: 'email'
        }
      },
      User2: {
        type: DataTypes.STRING,
        references: {
          model: 'medium_users', 
          key: 'email'
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'rooms_chats'
    }
  );

  return rooms_chats;
};


export default init_rooms_chats(connection, DataTypes);


