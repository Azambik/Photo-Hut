//main index for linking all route files together to server.js
const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const profileRoutes = require('./profile-routes.js');
const updateRoutes = require('./update-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/profile', profileRoutes);
router.use('/update',updateRoutes);
router.use('/api', apiRoutes);

module.exports = router;
