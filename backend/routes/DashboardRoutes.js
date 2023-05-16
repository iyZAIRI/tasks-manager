const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');

router.post('/dashboard/tasks', dashboardController.dashboardTasks);

module.exports = router;