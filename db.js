const mongoose = require('mongoose');

const uri = "mongodb+srv://assignmentuser:assignmentuser123@assignment01.nveobq3.mongodb.net/?retryWrites=true&w=majority"

async function connect () {
    try {
        await mongoose.connect(uri, {dbName: 'assignment01'});
        console.log("Connected to the database");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connect;