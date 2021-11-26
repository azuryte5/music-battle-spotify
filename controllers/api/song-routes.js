const request = require('request'); // "Request" library
const router = require('express').Router();

router.get('/', (req, res) => {
//   console.log("hiiiiiiiiiiiiiiiiiiiiii");
  var playlistID = "886a3aa9d3cd447f";
//   var apiURL = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";

//   fetch(apiURL, {
//     headers: {
//       Authentication: "Bearer BQBU5PGHKvpDnnVg9-oUeYeofIYyD7LU2W7_vl-AlHW0TWSJyf50IeDfi_-j6rQ0vWLL6-dkPZj6N61wT-vPwMvVndKfIdqxujd1Vy2pcg0WgeS9CpyEEM2lqE2Ik1jERPS99k4YOjCEZBzKIZL_jw9riCQpNdYX"
//     }
//   })
//   .then(response => response.json())
//   .then(data => res.json(data));
// });



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

