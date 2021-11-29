const router = require('express').Router();

const apiRoutes = require('./api');
const authenticationRoutes = require('./authentication-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/', authenticationRoutes);
router.use('/home', homeRoutes);




module.exports = router;