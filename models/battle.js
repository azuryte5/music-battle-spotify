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
