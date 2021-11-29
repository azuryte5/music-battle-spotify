const router = require('express').Router();
// const { User, Song, Battle } = require('../models');

// Handlebar homepage renders with dummy object
router.get('/', (req,res) => {
   return res.render('homepage', {appName:"Sputtle"})
})



module.exports = router;

