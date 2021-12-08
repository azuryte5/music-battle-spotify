const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Battle extends Model {}

Battle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },       
        win_song: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'song',
                key: 'id'
            }
          },
        lose_song: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'song',
                key: 'id'
            }
          }, 
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
              }
         }
        },
        {
            sequelize: sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'battle',
            
          }
        
        )




  module.exports = Battle