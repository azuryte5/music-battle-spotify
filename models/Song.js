const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { destroy } = require('./User');

// create our Song model
class Song extends Model {}

//This is just a draft - tesfu feel free to update it as needed.
//There does not seem to be a genre in the response from the spotify API so I omitted it

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
    }
    


    // score_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'score',
    //     key: 'id'
    //   }
    // }
    // Default score 1000
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