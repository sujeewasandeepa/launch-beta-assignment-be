const express = require('express');

const connect = require("./db");

const PORT = 5000;

const app = express();

connect();

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})