const router = require('express').Router();
const songRoutes = require('./song-routes');

router.use('/songs', songRoutes);


module.exports = router;
