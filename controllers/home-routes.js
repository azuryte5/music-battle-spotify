const router = require('express').Router();
const { User, Song } = require('../models');

// Handlebar homepage renders with dummy object
router.get('/', (req,res) => {
    Song.findAll({
        attributes:[
            'song_name'
        ],

    }).then(dbSongData => {
        console.log(req.session)
        res.render('homepage', {
            dbSongData,
            appName:"Sputtle",
            id: req.session.id,
            loggedIn: req.session.loggedIn,
            username: req.session.username 
     })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



module.exports = router;

