const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


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
    track_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1000
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
    indexes: [{
      unique: true,
      fields: ['track_id']  // this prevents duplicate songs being added to the database
    }]
  }
);


module.exports = Song;