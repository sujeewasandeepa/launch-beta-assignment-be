const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const employeeSchema = new Schema ({
    fullname: {
        type: String,
        required: true,
    },
    nameInitails: {
        type: String,
        required: true,
    },
    displayName: String,
    gender: String,
    birthday: Date,
    email: String,
    mobile: String,
    designation: String,
    employeeType: String,
    joinedDate: Date,
    experience: String,
    salary: Number,
    notes: String,
});

module.exports = mongoose.model('Employee', employeeSchema);