const router = require('express').Router();

const apiRoutes = require('./api');
const authenticationRoutes = require('./authentication-routes.js');
const homeRoutes = require('./home-routes.js');
const leaderboardRoutes = require('./leaderboard-routes');

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/', authenticationRoutes);
router.use('/leaderboard', leaderboardRoutes);



module.exports = router;