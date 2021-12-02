const request = require('request'); // "Request" library
const { Song } = require('../../models');
const router = require('express').Router();
const sequelize = require("../../config/connection");


//gets the list of all playlists for the signed in used
//jess is using this for now to get the playlist id where the app's song library is
//code to be removed when done - leave for now 
router.get('/userplaylists', (req, res) => {
  var options = {
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: { 'Authorization': 'Bearer ' + req.session.access_token }, //access token vs refresh token for calls???
    json: true
  };
  request.get(options, function(error, response, body) {
    console.log(body);
    res.json(body);
  });
});


//gets list of tracks/song info for our playlist
router.get('/', (req, res) => {
  var playlistID = "63ZyQhDqXWsq0Z39oiyq8q"; //playlist ID for the playlist I made for the app, ID is obtained using the code above
  var options = {
    url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    headers: { 'Authorization': 'Bearer ' + req.session.access_token }, //access token vs refresh token for calls???
    json: true
  };
  request.get(options, function(error, response, body) {
    // console.log(body);
    res.json(body);

    //gets the particular info we want from the API response and saves it to the songs variable
    //if we want to capture more song data, the model and the return options in this function need to be updated
    const songs = body.items.map(song => {
      return {
        song_name: song.track.name,
        song_artist: song.track.artists[0].name,
        image_url: song.track.album.images[1].url,
        track_id: song.track.id
      };
    });
    console.log(songs);
    // for all of the songs in our returned API data, each song is added to our song table
    Song.bulkCreate(songs)
      .then(dbSongData => res.json(dbSongData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

//returns 2 random songs from the table. 
// more songs could be returned by increasing the limit
// if we only want one random song, we can remove the limit and change it to findOne, the rest of the code can remain as is 
router.get('/songs', (req, res) => {
  Song.findAll({ 
    order: sequelize.random(),
    limit: 2
  })
  .then(dbSongData => {
    console.log(dbSongData)
    const songs = dbSongData.map(song => song.get({ plain: true }))
    console.log(songs)
    const data = { 
      id: req.session.id,
      loggedIn: req.session.loggedIn,
      username: req.session.username, 
      matchup:songs}
    console.log(data)
    res.render("homepage", data)
  
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});





module.exports = router;

