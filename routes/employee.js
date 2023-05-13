const express = require('express');
const employeeRouter = express.Router();

employeeRouter.post("/add", (req, res) => {
    res.send("Add employee");
});

employeeRouter.delete("/delete", (req, res) => {
    res.send("Delete employee");
});

employeeRouter.get("/", (req, res) => {
    res.send("Get employee");
});

employeeRouter.put("/edit", (req, res) => {
    res.send("Update employee");
});

module.exports = employeeRouter;