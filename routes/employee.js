const express = require('express');
const employeeRouter = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

employeeRouter.post("/add", (req, res) => {
    res.send("Add employee");
});

employeeRouter.delete("/delete", (req, res) => {
    res.send("Delete employee");
});

employeeRouter.get("/", EmployeeController.getEmployees);

employeeRouter.put("/edit", (req, res) => {
    res.send("Update employee");
});

module.exports = employeeRouter;