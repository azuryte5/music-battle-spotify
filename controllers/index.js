const router = require('express').Router();

const apiRoutes = require('./api');
const authenticationRoutes = require('./authentication-routes.js');

router.use('/api', apiRoutes);
router.use('/', authenticationRoutes);




module.exports = router;