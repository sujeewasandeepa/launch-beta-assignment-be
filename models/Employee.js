const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const Counter = require('./Counter');

const employeeSchema = new Schema ({
    fullname: {
        type: String,
        required: true,
    },
    nameInitails: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
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

employeeSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
    .then((counter) => {
        doc.id = counter.seq;
        next();
    })
    .catch((err)=> {
        console.error(err);
    });
})

module.exports = mongoose.model('Employee', employeeSchema);