const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Song model
class Song extends Model {}


Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    song_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    song_artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '../public/src/Spotify_Logo_RBG_Green.png'
    },
    // score_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'score',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song'
  }
);


module.exports = Song;