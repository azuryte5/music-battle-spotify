var request = require('request'); // "Request" library
var querystring = require('querystring');
const User = require('../models/User');
require('dotenv').config();



var client_id = '95a40f72efe7427997b6d815241b2315'; // Our client id
var client_secret = process.env.CLIENT_SECRET; // Our secret
// var redirect_uri = 'http://localhost:8888/callback'; // Our redirect/callback uri
var redirect_uri = 'http://music-battle-spotify.herokuapp.com/callback'; // Our redirect/callback uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

// var app = express();


const router = require('express').Router();

router.get('/login', function(req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // requests authorization from Spotify
  var scope = 'user-read-private user-read-email playlist-read-collaborative playlist-read-private user-library-read';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      //show_dialog forces user to see the log in to spotify time even if they are a return user
      show_dialog: true
    }));
});

router.get('/callback', function(req, res) {

  // application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);

        req.session.access_token = body.access_token;
        req.session.refresh_token = body.refresh_token;
        console.log(req.session.access_token)

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + req.session.access_token },
          json: true
        };
        

        // use the access token to access the Spotify Web API 
        request.get(options, function(error, response, body) {
        console.log(body.display_name);
          
        User.findOrCreate({
          where: { username: body.id}
        }).then(([user, created]) => {
            console.log(user)
            req.session.save(() => {
            req.session.username = user.dataValues.username;
            req.session.display_name = body.display_name;
            req.session.id = user.dataValues.id;
            req.session.loggedIn = true;
            res.redirect('/home');
          })        
          }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
        });
      };
    });
  }
});

//sets session tokens to null, revoking the access/connection to spotify to "log out"
router.get('/logout', function(req, res) {
  req.session.access_token = null;
  req.session.refresh_token = null;  
  if (req.session.loggedIn) {
  req.session.destroy(() => {
  res.status(204).end();
  })
  } else {
  res.status(404).end();
  }
   res.redirect('/');
});

// This will help get back to home.
router.get('/', function(req, res) {
  res.redirect('/home');
})
//spotify tokens expire so refresh token helps maintain user access
// app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
//   var refresh_token = req.query.refresh_token;
//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     },
//     json: true
//   };

//   request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;
//       res.send({
//         'access_token': access_token
//       });
//     }
//   });
// });



module.exports=router;