const express = require('express');
const router = express();

// routes
const employeeRouter = require('./employee');

router.use("/employee", employeeRouter);

module.exports = router;