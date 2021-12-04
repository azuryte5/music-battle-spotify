<<<<<<< HEAD
 // *** Defining table battle
// =============================================================
 module.exports = function(sequelize, DataTypes) {
    var battle = sequelize.define("battle", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default:1000
      },
      Song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true

      },
      
    }, {
      // Disable the modification of tablenames 
      freezeTableName: true
    });
  
    battle.associate = function (models) {
      battle.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return battle;
  };
=======
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
>>>>>>> develop
