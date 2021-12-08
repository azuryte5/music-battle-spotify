const router = require('express').Router();

const authenticationRoutes = require('./authentication-routes.js');
const homeRoutes = require('./home-routes.js');
const sputtleRoutes = require('./sputtle-routes.js');
const leaderboardRoutes = require('./leaderboard-routes');


router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/sputtle', sputtleRoutes)
router.use('/leaderboard', leaderboardRoutes);
router.use('/', authenticationRoutes);




module.exports = router;