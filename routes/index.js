const express = require('express');
const router = express();

// routes
const employeeRouter = require('./employee');

router.arguments("/employee", employeeRouter);

module.exports = router;