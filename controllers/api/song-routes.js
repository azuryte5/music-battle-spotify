const request = require('request'); // "Request" library
const router = require('express').Router();

router.get('/', (req, res) => {
  var playlistID = "886a3aa9d3cd447f";
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

