const request = require('request'); // "Request" library
const router = require('express').Router();

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
  var playlistID = "63ZyQhDqXWsq0Z39oiyq8q";
  var options = {
    url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    headers: { 'Authorization': 'Bearer ' + req.session.access_token }, //access token vs refresh token for calls???
    json: true
  };
  request.get(options, function(error, response, body) {
    console.log(body);
    res.json(body);
  });
});

module.exports = router;

