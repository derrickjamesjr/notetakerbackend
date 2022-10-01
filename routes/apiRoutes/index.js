const router = require('express').Router();

const apiRoutes = require('./apiroutes.js');

router.use('/api', apiRoutes);
// router.use('/notes', httpRoutes)

module.exports = router;