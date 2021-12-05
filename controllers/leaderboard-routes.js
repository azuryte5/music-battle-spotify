const sequelize = require("../config/connection");
const router = require('express').Router();
const { User, Song } = require('../models');

//gets playlist songs and orders them based on their score in descending order
router.get('/', (req, res) => {
  Song.findAll({ 
    order:[['score', 'DESC']],   })
    .then(dbSongData => {
      const songs = dbSongData.map(song => song.get({ plain: true }))
      console.log(songs)
      res.render("leaderboard", {songs,loggedIn: req.session.loggedIn,
        display_name: req.session.display_name})})
  });



module.exports = router;

