const sequelize = require("../config/connection");
const router = require('express').Router();
const { Song } = require('../models');

router.get('/', (req, res) => {
  Song.findAll({ 
    order: sequelize.random(),
    limit: 2
  })
  .then(dbSongData => {
    // console.log(dbSongData)
    const songs = dbSongData.map(song => song.get({ plain: true }))
    const matchup = { 
      // id: req.session.id,
      loggedIn: req.session.loggedIn,
      // username: req.session.username, 
      display_name: req.session.display_name,
      songs
    }
    console.log(matchup)
    res.render("sputtle", matchup)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});





module.exports = router;

