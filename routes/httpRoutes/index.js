const router = require('express').Router();

const httpRoutes = require('./httproutes.js');

router.use('/', httpRoutes);
router.use('/notes', httpRoutes)

module.exports = router;