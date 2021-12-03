const router = require('express').Router();

const apiRoutes = require('./api');
const authenticationRoutes = require('./authentication-routes.js');
const homeRoutes = require('./home-routes.js');
const sputtleRoutes = require('./sputtle-routes.js');

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/sputtle', sputtleRoutes)
router.use('/', authenticationRoutes);




module.exports = router;