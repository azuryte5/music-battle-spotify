// const sequelize = require("../config/connection");
const router = require('express').Router();
// const { User, Song } = require('../models');


// Handlebar homepage renders with dummy object
router.get('/', (req, res) => {
    // Song.findAll({ 
    //   order: sequelize.random(),
    //   limit: 2
    // })
    // .then(dbSongData => {
      // console.log(dbSongData)
      // const songs = dbSongData.map(song => song.get({ plain: true }))
      const data = { 
        id: req.session.id,
        loggedIn: req.session.loggedIn,
        username: req.session.username, 
        display_name: req.session.display_name,
        // matchup:songs
      }
      console.log(data)
      res.render("homepage", data)
    
    // }).catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    });
  // });



module.exports = router;

