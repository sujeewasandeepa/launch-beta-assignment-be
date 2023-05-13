const express = require('express');
const employeeRouter = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

employeeRouter.post("/add", EmployeeController.addEmployee);
employeeRouter.delete("/delete", EmployeeController.deleteEmployee);
employeeRouter.get("/", EmployeeController.getEmployees);
employeeRouter.put("/edit", EmployeeController.editEmployee);
employeeRouter.get("/filter", EmployeeController.filterEmployees);

module.exports = employeeRouter;