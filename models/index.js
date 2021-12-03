const User = require('./User');
const Song = require('./Song')
const Battle = require('./battle')


// User has many battles

// songs has many battles

// battles belonging to users

// battles belongs to songs

module.exports = { User, Song, Battle };