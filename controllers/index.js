const router = require('express').Router();

const authenticationRoutes = require('./authentication-routes.js');

router.use('/', authenticationRoutes);


module.exports = router;