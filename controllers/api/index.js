const router = require('express').Router();
const songRoutes = require('./song-routes');
const userRoutes = require('./user-routes');

router.use('/import-songs', songRoutes);
router.use('/users', userRoutes);


module.exports = router;
