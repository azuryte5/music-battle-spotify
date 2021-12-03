const sequelize = require("../config/connection");
const router = require('express').Router();
const { User, Song } = require('../models');

//gets playlist songs and orders them based on their score in descending order
router.get('/', (req, res) => {
  Song.findAll({ 
    order:[['score', 'DESC']],   })
    .then(dbSongData => res.render("leaderboard", {dbSongData}))
  });



module.exports = router;

