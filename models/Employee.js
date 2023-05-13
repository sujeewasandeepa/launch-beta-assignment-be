const { Schema } = require('mongoose');

const employeeSchema = new Schema ({
    fullname: {
        type: String,
        required: true,
    },
    nameInitails: {
        type: String,
        required: true,
    },
    displayName: {
        type: String
    },
    gender: {
        type: String
    },
    birthday: {
        type: Date
    },
    email: {
        type: email
    },
    mobile: {
        type: String
    },
    designation: {
        type: String
    },
    employeeType: {
        type: String
    },
    joinedData: {
        type: Date
    },
    experience: {
        type: String
    },
    salary: {
        type: Number
    },
    notes: {
        type: String
    }
});

module.exports = mongoose.model('Employee', employeeSchema);