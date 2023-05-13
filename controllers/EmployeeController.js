const Employee = require('../models/Employee');

// this function will get all the employees from the databse
exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

// this function will delete a particular employee from the database
exports.deleteEmployee = async (req, res) => {
    const { id } = req.body.id;
    await Employee.findByIdAndDelete(id);
    res.json({ message: "Employee deleted successfully!" });
}

// this function will add a new employee to the database
exports.addEmployee = async (req, res) => {
    const employee = new Employee({
        fullname: req.body.fullname,
        nameInitails: req.body.nameInitails,
        displayName: req.body.displayName,
        gender: req.body.gender,
        birthday: req.body.birthday,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        employeeType: req.body.employeeType,
        joinedDate: req.body.joinedDate,
        experience: req.body.experience,
        salary: req.body.salary,
        notes: req.body.notes,
    });

    await employee.save();
    res.json({ message: "Employee added successfully!" });
}

// this function will filter employees from the database from their employee type
exports.filterEmployees = async (req, res) => {
    const employee = req.body.employee;
    const employeeType = employee.employeeType;
    const employees = await Employee.find({ employeeType: employeeType });
    res.json(employees);
}