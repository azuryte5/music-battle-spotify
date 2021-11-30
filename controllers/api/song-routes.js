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

    const songs = body.items.map(song => {
      return {
        song_name: song.track.name,
        song_artist: song.track.artists[0].name,
        image_url: song.track.album.images[1].url
      };
    });
    console.log(songs);
    
    Song.bulkCreate(songs)
      .then(dbSongData => res.json(dbSongData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

router.get('/songs', (req, res) => {
  Song.findAll({ 
    order: sequelize.random(),
    limit: 2
  })
  .then(dbSongData => res.json(dbSongData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});





module.exports = router;

